require 'erb'

template = ERB.new(File.read("border_times.html.erb"))

File.open('border.html', 'w') do |f|
	f.write template.result
end