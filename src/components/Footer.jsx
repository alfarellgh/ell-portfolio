const Footer = () => {
  return (
    <div className="mt-32 mb-20 md:mb-0 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
      <h1 className="text-2xl font-bold">Portfolio</h1>
      <div className="flex items-center gap-3">
        <a href="#">
          <i className="ri-github-fill ri-2x"></i>
        </a>
        <a href="#">
          <i className="ri-linkedin-box-fill ri-2x"></i>
        </a>
        <a href="#">
          <i className="ri-whatsapp-fill ri-2x"></i>
        </a>
      </div>
    </div>
  )
}

export default Footer