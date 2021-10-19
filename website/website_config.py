PAGES = {}

PAGES['home'] = {
    'template': 'index.html',
    'url': 'index.html',
    'vars': {'content_file_path': 'home.html', 'header_nav_dark_light':'dark', 'logo_img_src_append':'-footer',
             'title': 'HCODE Technologies | Software Development Studio',
             'simple_page_desc': "Hcode is a dev studio that helps startups build tech products and has delivered high-quality MVPs for multiple startups at a reasonable price in a short time."}
}

PAGES['mvp'] = {
    'template': 'index.html',
    'url': 'mvp.html',
    'vars': {'content_file_path': 'mvp.html','header_nav_dark_light':'light', 'navigation_container_append':'-fluid',
             'title': 'HCODE Technologies | Software Development Studio',
             'simple_page_desc': "Hcode is a dev studio that helps startups build tech products and has delivered high-quality MVPs for multiple startups at a reasonable price in a short time."}
}

PAGES['portfolio'] = {
    'template': 'simple_page.html',
    'url': 'portfolio.html',
    'vars': {'title': 'HCODE Technologies | Portfolio',
             'simple_page_content_file_path': 'portfolio.html',
             'simple_page_title': 'PORTFOLIO',
             'simple_page_desc': 'We have worked on a broad range of projects, from algorithm-heavy backend projects to simple WordPress websites. Here are a few of them, to showcase the diversity of our projects.',
             'simple_page_breadcrumb': 'Portfolio'}
}

PAGES['casestudy'] = {
    'template': 'no_footer.html',
    'url': 'casestudy.html',
    'vars': {'title': 'HCODE Technologies | Download Casestudy',
             'content_file_path': 'casestudy.html',
             'simple_page_desc': "Hcode is a dev studio that helps startups build tech products and has delivered high-quality MVPs for multiple startups at a reasonable price in a short time."}

}

PAGES['privacy'] = {
    'template': 'simple_page.html',
    'url': 'privacy-policy.html',
    'vars': {'title': 'HCODE Technologies | Privacy Policy',
             'simple_page_content_file_path': 'privacy.html',
             'simple_page_title': 'PRIVACY POLICY',
             'simple_page_desc': 'Please read these Terms carefully, and contact us if you have any questions.',
             'simple_page_breadcrumb': 'Privacy Policy'}
}
PAGES['terms'] = {
    'template': 'simple_page.html',
    'url': 'terms-of-service.html',
    'vars': {'title': 'HCODE Technologies | Terms Of Use',
             'simple_page_content_file_path': 'terms.html',
             'simple_page_title': 'PRIVACY POLICY',
             'simple_page_desc': 'Please read these Terms carefully, and contact us if you have any questions.',
             'simple_page_breadcrumb': 'Privacy Policy'}
}

list_of_portfolio = ["pollinate", "funday", "cardekho", "liftrocket", "debie", "springboard", "dextro", "chartbiopsy", "zoyo.ai",
                     "indianrailways", "indore24", "pgram", "cloudyexcel", "verificient", "kgc","prepay","riff"]
n = len(list_of_portfolio)
for i, client in enumerate(list_of_portfolio):
    PAGES['portfolio-' + client] = {
        'template': 'portfolio_template.html',
        'url': 'portfolio/{}.html'.format(client),
        'vars': {'title': 'HCODE Technologies | Portfolio - {}'.format(client),
                 'portfolio_content_file_path': '{}.html'.format(client),
                 'simple_page_title': 'PORTFOLIO',
                 'simple_page_desc': 'Our team has a vast experience in Machine Learning, Deep Learning, Computer Vision, Full stack Web Application Development, Mobile Development. We also work in Python, Django, Angular, Android, iOS, etc. For ML we have ample experience using Tensorflow, Keras, numpy, panda, opencv etc.',
                 'simple_page_breadcrumb': client.capitalize(),
                 'left_href': '/portfolio/{}.html'.format(list_of_portfolio[(i + n - 1) % n]),
                 'right_href': '/portfolio/{}.html'.format(list_of_portfolio[(i + 1) % n]),
                 }
    }
