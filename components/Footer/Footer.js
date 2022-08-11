const styles = {
  footer: 'w-4/5 px-4',
  flex: "flex gap-9 flex-col justify-center lg:flex-row",

}

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.flex}>
        <div className="lg:w-1/3">
          <h2 className="text-[32px] text-black text-bold">Smart Solutions</h2>
          <p className="text-gray-500 mt-4 text-[16px] font-medium">Automate your entire healthcare hiring, onboarding and compliance with a true technology platform.</p>
          <div className="flex mt-8 flex-wrap">
            <div className="w-full mr-3 flex-1 py-0">
              <input className="text-gray-900 border-coolGray-200 h-12 w-full rounded-lg border px-3" placeholder="Email Address" />
            </div>
            <div className="w-auto">
              <a className="inline-block w-full rounded-md py-4 px-5 text-center h-full leading-3 text-black-50 shadow-sm border-2">Subscribe</a>
            </div>
          </div>
        </div>

        <div className="lg:w-2/3 flex flex-col justify-between md:flex-row gap-9 md:gap-0">
          <div>
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
          <div>
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
          <div>
            <h2 className="uppercase text-[24px] mb-10 font-semibold">Follow Us</h2>
            <ul>
              <li className="mb-5">Facebook</li>
              <li className="mb-5">Twitter</li>
              <li className="mb-5">Instagram</li>
              <li className="mb-5">Linkedin</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Footer