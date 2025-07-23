import geopandas as gpd
import pathlib
import csv
import numpy as np
import re

def icon_color(str_consideration,bin_array):
	consideration = float(str_consideration)
	barf = np.digitize(consideration,bin_array)
	if barf == 1:
		counts["greenIcon"] += 1
		return "greenIcon"
	if barf == 2:
		counts["blueIcon"] += 1
		return "blueIcon"
	if barf == 3:
		counts["orangeIcon"] += 1
		return "orangeIcon"
	if barf == 4:
		counts["redIcon"] += 1
		return "redIcon"
	if barf == 5:
		counts["violetIcon"] += 1
		return "violetIcon"
	counts["other"] += 1
	return "violetIcon"

# Source for these shape files is from MD Department of Planning, https://planning.maryland.gov/Pages/OurProducts/downloadFiles.aspx
shapefiles = ["/home/abba/maryland-politics/clean_slate_moco/mcps/heat_map/2024/SALE0124.shp","/home/abba/maryland-politics/clean_slate_moco/mcps/heat_map/2024/SALE0224.shp","/home/abba/maryland-politics/clean_slate_moco/mcps/heat_map/2024/SALE0324.shp"]
destination_folder = "/tmp"

csv_files = []
considerations = []
records = []
counts = {
	"greenIcon": 0,
	"blueIcon": 0,
	"orangeIcon": 0,
	"redIcon": 0,
	"violetIcon": 0,
	"other": 0
}

# Write records for Montgomery County into a CSV. Useful if need to do forensics
for shapefile in shapefiles:
	stemname = pathlib.PurePosixPath(shapefile).stem
	outfilename = pathlib.Path(destination_folder, stemname + '.csv')
	csv_files.append(outfilename)
	print("processing " + str(outfilename))
	geopandas_df = gpd.read_file(shapefile,where="(JURSCODE='MONT') AND (DESCLU IN ('Residential', 'Residential Condominium')) AND (CONSIDR1 > 0) AND (DIGXCORD > 0)")
	converted_df = geopandas_df.to_crs('EPSG:4326')
	converted_df.to_csv(outfilename, index=False)

for csvfile in csv_files:
	print(str(csvfile))
	infile = open(csvfile, 'r')
	dictfile = csv.DictReader(infile)
	for row in dictfile:
		print('{0}\t{1}\t{2}\n'.format(row['TRADATE'],row['CONSIDR1'],row['geometry']))
		#POINT (-77.19201870168611 39.21829732718003)
		mymatch = re.match("POINT \(([-\d.]+) ([\d.]+)\)", row['geometry'])   # Match
		if mymatch is None:
			continue
		mytuple = (row['TRADATE'],row['CONSIDR1'],mymatch[2], mymatch[1])
		records.append(mytuple)
		print('{0}\t{1}\t{2}\t{3}\n'.format(row['TRADATE'],row['CONSIDR1'],mymatch[2], mymatch[1]))
		considerations.append(int(row['CONSIDR1']))
	infile.close


low_30 = np.percentile(considerations, [30, 50, 80, 90])
print(type(low_30))
print(low_30)
print ("Number of considerations: {0}\n".format(len(considerations)))
print ("Number of records: {0}\n".format(len(records)))
bin_array = [min(considerations)]
bin_array.extend(low_30)
bin_array.append(max(considerations))
histogram = np.histogram(considerations,bin_array)
print(histogram)

# Open outfile
outfile = open("/home/abba/maryland-politics/clean_slate_moco/mcps/heat_map/js/add_markers.js","w")
# Write function header
outfile.write("function add_markers(map_county_transit_centers) {\n")
for record in records:
	marker_icon = icon_color(record[1], bin_array)
	outfile.write("\tL.marker([{0},{1}],{{icon: {2}}}).addTo(map_county_transit_centers)\n".format(record[2], record[3],marker_icon))

outfile.write("}\n")

for key,value in counts.items():
	print(key + ": " + str(value))
