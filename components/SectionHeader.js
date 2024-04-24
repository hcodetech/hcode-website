const SectionHeader = ({ heading, paragraph, cta, ctaText }) => (
    <div>
      <div className="new-container text-center mx-auto  py-16">
        <div className="max-w-lg mx-auto ">
          <h2 className="font-semibold text-3xl md:text-4xl my-4">{heading}</h2>
          <div className="px-3 py-[2px] max-w-[120px] my-4 bg-blue-500 mx-auto"></div>
          <p className="sm:text-xl font-light sm:font-normal pt-1 pb-6">
            {paragraph}
          </p>
          <div className="mt-6">
            {cta && (
              <a
                href="/contact"
                className="bg-white text-primary  border-primary border-2 rounded px-5 sm:px-16 py-4 text-center hover:bg-primary hover:text-white hover:border-white"
              >
                {ctaText || 'Tell us about your project'}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
  export default SectionHeader;