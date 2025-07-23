from pyproj import CRS,Transformer


crs_4269 = CRS.from_epsg(4269) #NAD83 Maryland
crs_4326 = CRS.from_epsg(4326) #Mercator
crs_26917 = CRS.from_epsg(26917) #Mercator
crs_26985 = CRS.from_epsg(26985) #Maryland Shapefile 

transformer = Transformer.from_crs(crs_4269, crs_4326, always_xy=True)
transformer = Transformer.from_crs(crs_4269, crs_4326)
transformer = Transformer.from_crs(crs_26985, crs_4326)
newstuff = transformer.transform(392489.200000003, 150767.8999999985)
#newstuff = transformer.transform(39.05152907322688, -77.14241823301259)
print(newstuff)


