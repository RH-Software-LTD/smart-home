const styles = {
    footer: 'relative container py-10 w-[1320px] px-4',
    flex: "flex flex-wrap gap-16 justify-center",

}

const Footer = () => {
    return (
    <>
      <section className={styles.footer}>
        <div className={styles.flex}>
          <div className="mb-12 p-6 w-4/12">
              <h2 className="text-[32px] text-black text-bold">smartHome</h2>
              <p className="text-gray-500 mt-4 text-[16px] font-medium w-[334px]">Automate your entire healthcare hiring, onboarding and compliance with a true technology platform.</p>
              <div className="flex w-[334px] mt-8 flex-wrap">
                <div className="w-full mr-3 flex-1 py-0">
                  <input className="text-gray-900 border-coolGray-200 h-12 w-full rounded-lg border px-3" placeholder="Email Address" />
                </div>
                <div className="w-auto">
                  <a className="inline-block w-full rounded-md py-4 px-5 text-center h-full leading-3 text-black-50 shadow-sm border-2">Subscribe</a>
                </div>
              </div>
          </div>
          <div className="w-2/12">
            <h2 className="uppercase text-[24px] mb-10 font-semibold">Categories</h2>
            <ul>
              <li className="mb-5">Product Management</li>
              <li className="mb-5">Design / Creatives</li>              
              <li className="mb-5">Education & Training</li>              
              <li className="mb-5">UI/UX Designers</li>
              <li className="mb-5">Development</li>
              <li>Customer Support</li>
            </ul>
          </div>
          <div className="w-2/12">
            <h2 className="uppercase text-[24px] mb-10 font-semibold">About</h2>
            <ul>
              <li className="mb-5">About Us</li>
              <li className="mb-5">Partnerships</li>              
              <li className="mb-5">Finance Experts</li>              
              <li className="mb-5">Project Management</li>
              <li className="mb-5">Product Manager</li>
              <li>The Team</li>
            </ul>
          </div>
          <div className="w-2/12">
            <h2 className="uppercase text-[24px] mb-10 font-semibold">Follow Us</h2>
            <ul>
              <li className="mb-5">Facebook</li>
              <li className="mb-5">Twitter</li>              
              <li className="mb-5">Instagram</li>              
              <li className="mb-5">Linkedin</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="w-full">
        <p className="text-center text-sm text-[#FAFAFA] py-8 bg-[#000F37] pt-12 mt-16">Copyright © 2021 all rights reserved smartHome</p>
      </section>
    </>
    )
}

export default Footer