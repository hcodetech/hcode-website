
import website_config as config
from mako.template import Template
from mako.lookup import TemplateLookup
import datetime
import pytz
from css_html_js_minify import process_single_html_file, process_single_js_file, process_single_css_file, html_minify, js_minify, css_minify
import gzip
import glob

current_time = datetime.datetime.now(pytz.utc).isoformat()

sitemap_str = """<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

"""

mylookup = TemplateLookup(directories=['./templates', './templates/content', './templates/content/portfolio'], 
	encoding_errors='replace')

for page_name, page_settings in config.PAGES.items():
	print("Generating Page {} using template '{}' and storing at '{}'".format(
			page_name.upper(), page_settings['template'], page_settings['url']))

	mytemplate = mylookup.get_template(page_settings['template'])

	with open(page_settings['url'], 'w') as final_file:
		html = mytemplate.render(**page_settings['vars'])
		# final_file.write(html_minify(html))
		final_file.write(' '.join(html.split()))

	if page_name != "home":
		sitemap_str += """
		<url>
			<loc>http://hcode.tech/{}</loc>
			<lastmod>{}</lastmod>
			<priority>.80</priority>
		</url>
		""".format(page_settings['url'], current_time)

	else:
		sitemap_str += """
		<url>
	  		<loc>http://hcode.tech/</loc>
	  		<lastmod>{}</lastmod>
	  		<priority>1.00</priority>
	 	</url>
	 	""".format( current_time) 



sitemap_str += "</urlset>"

# process_single_js_file("js/main.js", overwrite=False)
# process_single_js_file("js/custom.js", overwrite=False)
# 'test.min.js'
process_single_css_file('css/style.css', overwrite=False)
# 'test.min.css'




all_js = glob.glob("js/*.min.js")
for js_file in all_js:
	print("Compressing js files {}".format(js_file))
	with open(js_file, 'rb') as src, gzip.open(js_file+".gz", 'wb') as dst:
		for chunk in iter(lambda: src.read(4096), b""):
			dst.write(chunk)

all_js = glob.glob("css/*.min.css")
for js_file in all_js:
	print("Compressing css files {}".format(js_file))
	with open(js_file, 'rb') as src, gzip.open(js_file+".gz", 'wb') as dst:
		for chunk in iter(lambda: src.read(4096), b""):
			dst.write(chunk)


with open("sitemap.xml", 'w+') as sitemap_file:
	print("Generating Sitemap: sitemap.xml")
	sitemap_file.write(sitemap_str)