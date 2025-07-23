import fiona
from pyproj import CRS,Transformer

crs_26985 = CRS.from_epsg(26985) #Maryland Shapefile 
crs_4326 = CRS.from_epsg(4326) #Mercator, LeafletJS
transformer = Transformer.from_crs(crs_26985, crs_4326)
# Open outfile
outfile = open("/home/abba/maryland-politics/clean_slate_moco/mcps/heat_map/js/add_markers.js","w")
# Write function header
outfile.write("function add_markers(map_county_transit_centers) {\n")
range0 = range (0,345000)
range1 = range (345001, 450000)
range2 = range (450001, 700001)
range3 = range (700002, 950002)
range4 = range (950003, 2000000)
counts = {
	"greenIcon": 0,
	"blueIcon": 0,
	"orangeIcon": 0,
	"redIcon": 0,
	"violetIcon": 0,
	"other": 0
}

def icon_color(consideration):
	print(consideration)
	if consideration in range0:
		counts["greenIcon"] += 1
		return "greenIcon"
	if consideration in range1:
		counts["blueIcon"] += 1
		return "blueIcon"
	if consideration in range2:
		counts["orangeIcon"] += 1
		return "orangeIcon"
	if consideration in range3:
		counts["redIcon"] += 1
		return "redIcon"
	if consideration in range4:
		counts["violetIcon"] += 1
		return "violetIcon"
	counts["other"] += 1
	return "violetIcon"

# Open the shapefile
with fiona.open("/home/abba/maryland-politics/clean_slate_moco/mcps/heat_map/Mont2017/OVERLAYS/ResSale/mont_sale18.shp") as shapefile:
	#print(shapefile.profile)
	# Iterate over the records
	for record in shapefile:
		# Transform coordinates and print the record
		mercator = transformer.transform(record["geometry"]["coordinates"][0], record["geometry"]["coordinates"][1])
		marker_icon = icon_color(record["properties"]["CONSIDR1"])
		outfile.write("\tL.marker([{0},{1}],{{icon: {2}}}).addTo(map_county_transit_centers)\n".format(str(mercator[0]),str(mercator[1]),marker_icon))

# Write closing brace
outfile.write("}\n")
for key,value in counts.items():
	print(key + ": " + str(value))
