import React from "react";

const MetaTags = ({ page }) => {
  return (
    <>
      <meta
        name="keywords"
        content="
        Custom Software Development Services , 
         Web Development Company   , 
         Mobile App Development Company,
         MERN Stack Development Services,    
         React Development Services,
        Python Development Services , 
        Java Development Services ,   
        Agile Software Development , 
        Full-stack Development Services,    
        UX/UI Design Services ,   
        Blockchain Development Services,    
        Technology Consulting Services,    
        Best Practices in Software Development,
        "
      />
      <link rel="canonical" href={page.url} />
      <meta name="description" content={page.description} />
      <meta name="image" content={page.share_image} />

      <meta itemProp="name" content={page.title} />
      <meta itemProp="description" content={page.description} />
      <meta itemProp="image" content={page.share_image} />

      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={page.title} />
      <meta property="og:description" content={page.description} />

      <meta property="og:url" content={page.url} />
      <meta property="og:site_name" content={page.title} />
      <meta property="og:image" content={page.share_image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="627" />
      <meta property="og:image:type" content="image/jpg" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={page.url} />
      <meta property="twitter:title" content={page.title} />
      <meta property="twitter:description" content={page.description} />
      <meta property="twitter:image" content={page.share_image} />
    </>
  );
};

export default MetaTags;
