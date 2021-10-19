
### Dependency
```
sudo apt-get install nginx
```

`pip3 install -r requirements.txt`


### To generate site:
`python3 website_generator.py`

#### What does website_generator do:
Website Generator load the `website_config.py`. It then iterates over all the pages objects in the dictonary and then creates html pages for each of them.

We will take one page and explaint the variables:
```
PAGES['casestudy'] = {
    'template': 'no_footer.html',
    'url': 'casestudy.html',
    'vars': {'title': 'HCODE Technologies | Download Casestudy',
             'content_file_path': 'casestudy.html',
             'simple_page_desc': "Hcode is a dev studio that helps startups build tech products and has delivered high-quality MVPs for multiple startups at a reasonable price in a short time."}

}
```
this will create a page called `casestudy.html` (`url` variable above) and stoe that in home directory.
It will use the `templates/no_footer.html` template to create this. (`template` variable above)
It will then use the `vars` like `title`, `simple_page_desc` to populate the template.

Also note that `website_config` iterates over `list_of_portfolio` variable to create a config for each portfolio in that list. This is than used by `website_generator` to create 1 page per portfolio.

Also website_genrator creates a sitemap for the website `sitemap.xml` and compresses the html, css, js to improver performance of website.


### To add a new portfolio project to website
3 changed need to happend:

1. Add a tile on Home page Portfolio Section 
2. Add the same tile to Portflio Page (in the correct order, as it may seem fit)
3. Create a portfolio page

"Note that the images in all these posts should be .webp format for quicker load times."

#### 1. To add to Home page:
Only add tile here if we want to highligh the project on home page.
Go to `templates/content/home.html` and add a section like below with correct name and image links
```
<!-- Portfolio Item 1: Debie -->
    <div class="item" onclick="location.href='./portfolio/debie.html';" style="cursor: pointer;">
        <div class="iq-blog-box">
            <div class="iq-blog-image clearfix">
                <img class="img-fluid center-block" src="images/portfolio/debie.webp" alt="#">
            </div>
            <div class="iq-blog-detail">
                <div class="blog-title"><a href="./portfolio/debie.html"><h5
                        class="iq-tw-6 iq-mb-10">Debie</h5></a></div>
                <div class="blog-content">
                    <p>We worked closely with the NYC based Debie team to build a rating platform for real estate.
                        The solution incorporated data-streams from multiple sources to generate ratings.</p>
                </div>
            </div>
        </div>
    </div>
```

Add the corresponding images to ` images/portfolio/<project_prifx>.png/jpeg`

#### 2. To add to portfolio page:
Go to `templates/content/portfolio.html` and add a similar section as above by doing a copy paste on one of the exsiting tiles on that page.
Please make sure you do not mix the tiles of home page and portfolio page while doing a copy paste.

Add the tile on a location based on how imporatant that project is for us to highlight.

Add the corresponding images to ` images/portfolio/<project_prifx>.png/jpeg`

Along with this, the hyperlink address of dedicated project page should also change.


#### 3. Create a portfolio page

Copy one of the project pages from here `templates/content/portfolio/` and rename them to your project.

for ex:  `templates/content/portfolio/chartbiopsy.html` can be copied to  `templates/content/portfolio/project_name.html`

Make sure you make all the changes in the copied file and add all the images to ` images/portfolio/<project_prifx>.png/jpeg`
 
as a last step go to `website_config.py` and add the `project_name` to `list_of_portfolio` 

You can now generate website again and see the changes.

### Server Setup

#### Local Machine
Make sure you point you local nginx to website folder
`sudo vim /etc/nginx/sites-enabled/default`

Update the root to path of your repo. For example if username is `shahsank` and repo name is `website` then your config will look like:

```
 root /home/shahsank/repos/website/;

# Add index.php to the list if you are using PHP
index index.html index.htm index.nginx-debian.html;


```

after the change do
```
sudo service nginx reload
```


#### To enable caching:
https://www.digitalocean.com/community/tutorials/how-to-implement-browser-caching-with-nginx-s-header-module-on-ubuntu-16-04

####  To enable compression on nginx:

https://www.digitalocean.com/community/tutorials/how-to-add-the-gzip-module-to-nginx-on-ubuntu-14-04

https://docs.nginx.com/nginx/admin-guide/web-server/compression/
