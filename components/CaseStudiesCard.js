function CaseStudiesCard({ data }) {
  return (
    <div className=''>
      <img src={data.client_logo} className='h-[250px] object-contain w-full' />
      <h2 className='font-semibold text-2xl my-1'> {data.client_name}</h2>
      <p>{data.descripition}</p>
      {/* <button className='bg-blue-200 rounded-sm py-3 px-4 text-xs text-primary font-medium mt-3 cursor-default '>
        Coming Soon
      </button> */}
    </div>
  );
}

export default CaseStudiesCard;
