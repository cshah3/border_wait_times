require 'nokogiri'
require 'open-uri'

page = Nokogiri::HTML(open("http://www.cbsa-asfc.gc.ca/bwt-taf/"))
borders = page.css('tr td[headers="Office"]')
com = page.css('tr td[headers="Com ComCanada"]')
trav = page.css('tr td[headers="Trav TravCanada"]')

File.open('border.html', 'w') do |f|

	f.puts("
	<html>
	<head>
	  <title>Canadian Border Wait Times</title>
	  <link rel=\"stylesheet\" type=\"text/css\" href=\"style.css\">
	</head>
	<body>
	<div id=\"container\">
	  <hl>Canada Bound Wait Times</h1>
	  <table>
	  	<tr>
	  		<th>Border</th>
	  		<th>Last Updated</th>
	  		<th>Commercial Traffic</th>
	  		<th>Passenger Traffic</th>
	  	</tr>
	    <tr>
	")

	counter = 0
	borders.each do |border|
		f.puts("  <td>" + border.children[0].text + "</td>")
		f.puts("  <td>" + border.children[6].text + "</td>")
		f.puts("  <td>" + com[counter].text + "</td>")
		f.puts("  <td>" + trav[counter].text + "</td>")

		f.puts("
		</tr>
		<tr>
		")

		counter+=1
	end

	f.puts("
	    </tr>
	  </table>
	</div>
	</body>\n
	</html>\n
	")
end