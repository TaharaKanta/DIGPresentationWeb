import glob

linesBefore = [
    'function makeStocksData(){\n'
]
linesAfter = [
    '}\n'
    'makeStocksData()'
]


files = glob.glob("./*")
print(files)
csvList = []
for file in files:
    if(file[-3:] == 'csv'):
        csvList.append((file[:-20])[2:])

f = open('../javascript/makeStocksDatalist.js','w')
f.writelines(linesBefore)
for file in csvList:
    f.write(' $("<option>").attr({value:"')
    f.write(file)
    f.write('"}).appendTo("#stocks-symbols");\n')
f.writelines(linesAfter)
f.close()