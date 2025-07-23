function add_high_schools(map_county_transit_centers) {
//	L.marker([38.98665539105174, -77.08851483272647],{icon: blackIcon}).addTo(map_county_transit_centers) /* BCC */

//L.tooltip([39.06133783, -77.06666911],{permanent: true, content: "Wheaton HS"}).addTo(map_county_transit_centers) /* Wheaton HS */

var wheaton = L.tooltip([39.06133783, -77.06666911],{permanent: true, content: "Wheaton (38)"})
var kennedy = L.tooltip([39.06575023, -77.03902787],{permanent: true, content: "Kennedy (?)"})
var springbrook = L.tooltip([39.05780189, -77.00568153],{permanent: true, content: "Springbrook (57)"})
var paintbranch = L.tooltip([39.08867914, -76.94710157],{permanent: true, content: "Paint Branch (73)"})
var blake = L.tooltip([39.11333041, -77.01750616],{permanent: true, content: "Blake (44)"})
var northwood = L.tooltip([39.03569422, -77.02248401],{permanent: true, content: "Northwood (12)"})
var clarksburg = L.tooltip([39.22550178, -77.26558665],{permanent: true, content: "Clarksburg (21)"})
var wj = L.tooltip([39.02539184, -77.13010175],{permanent: true, content: "Walter Johnson (7)"})
var blair = L.tooltip([39.01827289, -77.01243432],{permanent: true, content: "Blair (14)"})
var poolesville = L.tooltip([39.14310333, -77.41878017],{permanent: true, content: "Poolesville (1)"})
var watkinsmill = L.tooltip([39.18396666, -77.21583624],{permanent: true, content: "Watkins Mill (109)"})
var damascus = L.tooltip([39.2824956, -77.21001991],{permanent: true, content: "Damascus (28)"})
var whitman = L.tooltip([38.98163071, -77.12767282],{permanent: true, content: "Whitman (2)"})
var bcc = L.tooltip([38.98682643, -77.08897],{permanent: true, content: "BCC (9)"})
var sherwood = L.tooltip([39.14834233, -77.01877183],{permanent: true, content: "Sherwood (25)"})
var magruder = L.tooltip([39.13131094, -77.11880595],{permanent: true, content: "Magruder (54)"})
var gaitersburg = L.tooltip([39.1348394, -77.19547765],{permanent: true, content: "Gaithersburg (88)"})
var senecavalley = L.tooltip([39.17509368, -77.26433197],{permanent: true, content: "Seneca Valley (58)"})
var qo = L.tooltip([39.11593266, -77.25423912],{permanent: true, content: "Quince Orchard (18)"})
var wootton = L.tooltip([39.07658209, -77.18319747],{permanent: true, content: "Wootton (6)"})
var montgomery = L.tooltip([39.07729203, -77.14572981],{permanent: true, content: "Richard Montgomery (8)"})
var rockville = L.tooltip([39.08634777, -77.11827243],{permanent: true, content: "Rockville (39)"})
var northwest = L.tooltip([39.15159255, -77.27932945],{permanent: true, content: "Northwest (12)"})
var churchill = L.tooltip([39.04430475, -77.17312817],{permanent: true, content: "Churchill (4)"})
var einstein = L.tooltip([39.03961585, -77.06703605],{permanent: true, content: "Einstein (46)"})

var labels = L.layerGroup([wheaton,
kennedy,
springbrook,
paintbranch,
blake,
northwood,
clarksburg,
wj,
blair,
poolesville,
watkinsmill,
damascus,
whitman,
bcc,
sherwood,
magruder,
gaitersburg,
senecavalley,
qo,
wootton,
montgomery,
rockville,
northwest,
churchill,
einstein
])

labels.addTo(map_county_transit_centers)

var overlayMaps = {
    "Labels": labels
};
var layerControl = L.control.layers(null, overlayMaps).addTo(map_county_transit_centers);

L.marker([39.06133783, -77.06666911],{icon: blackIcon}).addTo(map_county_transit_centers) /* Wheaton HS */
L.marker([39.06575023, -77.03902787],{icon: blackIcon}).addTo(map_county_transit_centers) /* John F Kennedy HS */
L.marker([39.05780189, -77.00568153],{icon: blackIcon}).addTo(map_county_transit_centers) /* Springbrook HS */
L.marker([39.08867914, -76.94710157],{icon: blackIcon}).addTo(map_county_transit_centers) /* Paint Branch HS */
L.marker([39.11333041, -77.01750616],{icon: blackIcon}).addTo(map_county_transit_centers) /* James Hubert Blake HS */
L.marker([39.03569422, -77.02248401],{icon: blackIcon}).addTo(map_county_transit_centers) /* Northwood HS */
L.marker([39.22550178, -77.26558665],{icon: blackIcon}).addTo(map_county_transit_centers) /* Clarksburg HS */
L.marker([39.02539184, -77.13010175],{icon: blackIcon}).addTo(map_county_transit_centers) /* Walter Johnson HS */
L.marker([39.01827289, -77.01243432],{icon: blackIcon}).addTo(map_county_transit_centers) /* Montgomery Blair HS */
L.marker([39.14310333, -77.41878017],{icon: blackIcon}).addTo(map_county_transit_centers) /* Poolesville HS */
L.marker([39.18396666, -77.21583624],{icon: blackIcon}).addTo(map_county_transit_centers) /* Watkins Mill HS */
L.marker([39.2824956, -77.21001991],{icon: blackIcon}).addTo(map_county_transit_centers) /* Damascus HS */
L.marker([38.98163071, -77.12767282],{icon: blackIcon}).addTo(map_county_transit_centers) /* Walt Whitman HS */
L.marker([38.98682643, -77.08897],{icon: blackIcon}).addTo(map_county_transit_centers) /* Bethesda-Chevy Chase HS */
L.marker([39.14834233, -77.01877183],{icon: blackIcon}).addTo(map_county_transit_centers) /* Sherwood HS */
L.marker([39.13131094, -77.11880595],{icon: blackIcon}).addTo(map_county_transit_centers) /* Col Zadok Magruder HS */
L.marker([39.1348394, -77.19547765],{icon: blackIcon}).addTo(map_county_transit_centers) /* Gaithersburg HS */
L.marker([39.17509368, -77.26433197],{icon: blackIcon}).addTo(map_county_transit_centers) /* Seneca Valley HS */
L.marker([39.11593266, -77.25423912],{icon: blackIcon}).addTo(map_county_transit_centers) /* Quince Orchard HS */
L.marker([39.07658209, -77.18319747],{icon: blackIcon}).addTo(map_county_transit_centers) /* Thomas S Wootton HS */
L.marker([39.07729203, -77.14572981],{icon: blackIcon}).addTo(map_county_transit_centers) /* Richard Montgomery HS */
L.marker([39.08634777, -77.11827243],{icon: blackIcon}).addTo(map_county_transit_centers) /* Rockville HS */
L.marker([39.15159255, -77.27932945],{icon: blackIcon}).addTo(map_county_transit_centers) /* Northwest HS */
L.marker([39.04430475, -77.17312817],{icon: blackIcon}).addTo(map_county_transit_centers) /* Winston Churchill HS */
L.marker([39.03961585, -77.06703605],{icon: blackIcon}).addTo(map_county_transit_centers) /* Albert Einstein HS */

}
