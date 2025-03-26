"use client";
import { createClient } from "@supabase/supabase-js";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_API_KEY
);

export default function Contact() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    memories: "",
    note: "",
    reason: "",
  });
  const insertContact = async () => {
    if (!contact.name || !contact.email) {
      toast.error("Name and email is require!");
    } else {
      const { data, error } = await supabase
        .from("contact")
        .insert([
          {
            name: contact.name,
            email: contact.email,
            memories: contact.memories,
            note: contact.note,
            reason: contact.reason,
          },
        ])
        .select();
        
      if (data) {
        toast.success("Submit feedback success!");
        setContact({
          name: "",
          email: "",
          memories: "",
          note: "",
          reason: "",
        });
      }
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({
      ...contact,
      [name]: value,
    });
  };

  return (
    <div className="container position-relative">
      <div className="row">
        {/* Left Column */}
        <div className="col-lg-4 mb-md-50 mb-sm-30 position-relative z-index-1">
          <h2 className="section-caption-fancy mb-20 mb-xs-10">Contact Us</h2>
          <h3 className="section-title mb-50 mb-sm-30">
            Tell Us About the Memories You Want to Preserve
          </h3>
          {/* Contact Information */}
          <div className="row">
            <div className="col-md-11">
              {/* Address */}
              {/* 
              {contactItems.map((item, index) => (
                <React.Fragment key={index}>
                  <div
                    className={`contact-item ${
                      index !== 3 ? "mb-40 mb-sm-20" : ""
                    }`}
                  >
                    <div className="ci-icon">
                      <i className={item.iconClass} />
                    </div>
                    <h4 className="ci-title  visually-hidden">{item.title}</h4>
                    <div className="ci-text">{item.text}</div>
                    <div>
                      <a
                        href={item.link.url}
                        target={item.link.target}
                        rel={item.link.rel}
                        className="link-hover-anim"
                        data-link-animate="y"
                      >
                        <span className="link-strong link-strong-unhovered">
                          {item.link.text}{" "}
                          <i
                            className="mi-arrow-right size-18"
                            aria-hidden="true"
                          ></i>
                        </span>
                        <span
                          className="link-strong link-strong-hovered"
                          aria-hidden="true"
                        >
                          {item.link.text}{" "}
                          <i
                            className="mi-arrow-right size-18"
                            aria-hidden="true"
                          ></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </React.Fragment>
              ))} */}
              {/* End Phone */}
            </div>
            <p>
              We work closely with a limited number of families each month to
              ensure every memory is treated with care and respect. <br /> If
              this speaks to your heart, reach out today. Let’s create something
              meaningful together.
            </p>
          </div>
          {/* End Contact Information */}
        </div>
        {/* End Left Column */}
        {/* Right Column */}
        <div className="col-lg-8 col-xl-7 offset-xl-1">
          <div className="position-relative">
            {/* Decorative Image */}
            {/* <div className="decoration-11 d-none d-xl-block">
              <div className="wow fadeInUp">
                <Image
                  src="/assets/landing/img1.png"
                  width={225}
                  height={250}
                  alt=""
                />
              </div>
            </div> */}
            {/* End Decorative Image */}
            <div className="box-shadow round p-4 p-sm-5">
              <h4 className="h3 mb-30">Get in Touch</h4>
              {/* Contact Form */}
              <form
                onSubmit={(e) => e.preventDefault()}
                className="form contact-form"
                id="contact_form"
              >
                <div className="row">
                  <div className="col-md-6">
                    {/* Name */}
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="input-lg round form-control"
                        placeholder="Enter your name"
                        pattern=".{3,100}"
                        onChange={(e) => handleChange(e)}
                        required
                        aria-required="true"
                        value={contact.name}
                      />
                    </div>
                    {/* End Name */}
                  </div>
                  <div className="col-md-6">
                    {/* Email */}
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="input-lg round form-control"
                        placeholder="Enter your email"
                        pattern=".{5,100}"
                        required
                        aria-required="true"
                        onChange={(e) => handleChange(e)}
                        value={contact.email}
                      />
                    </div>
                    {/* End Email */}
                  </div>
                </div>
                {/* Message */}
                <div className="form-group">
                  <label htmlFor="message">
                    Who do you want to preserve memories of?
                  </label>
                  <textarea
                    name="memories"
                    id="memories"
                    className="input-lg round form-control"
                    style={{ height: 100 }}
                    placeholder="Who do you want to preserve memories of?"
                    // defaultValue={""}
                    onChange={(e) => handleChange(e)}
                    value={contact.memories}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">
                    What is something about them you never want to forget?
                  </label>
                  <textarea
                    name="note"
                    id="note"
                    className="input-lg round form-control"
                    style={{ height: 100 }}
                    placeholder="What is something about them you never want to forget?"
                    // defaultValue={""}
                    onChange={(e) => handleChange(e)}
                    value={contact.note}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">
                    Why is this important to you? (Share your thoughts with us…)
                  </label>
                  <textarea
                    name="reason"
                    id="reason"
                    className="input-lg round form-control"
                    style={{ height: 100 }}
                    placeholder="Why is this important to you? (Share your thoughts with us…)"
                    // defaultValue={""}
                    onChange={(e) => handleChange(e)}
                    value={contact.reason}
                  />
                </div>
                <div className="row">
                  <div className="col-md-6 col-xl-5">
                    {/* Send Button */}
                    <div className="pt-3">
                      <button
                        className="submit_btn btn btn-mod btn-color btn-large btn-round btn-hover-anim"
                        id="liveToastBtn"
                        aria-controls="result"
                        onClick={insertContact}
                      >
                        <span>Begin Remembering</span>
                      </button>
                    </div>
                    {/* End Send Button */}
                  </div>
                  <div className="col-md-6 col-xl-7 d-flex align-items-center">
                    {/* Inform Tip */}
                    <div className="form-tip w-100 pt-3 mt-sm-20">
                      <i className="icon-info size-16" />
                      All the fields are required. By sending the form you agree
                      to the <a href="#">Terms &amp; Conditions</a> and{" "}
                      <a href="#">Privacy Policy</a>.
                    </div>
                    {/* End Inform Tip */}
                  </div>
                </div>
                <div
                  id="result"
                  role="region"
                  aria-live="polite"
                  aria-atomic="true"
                />
              </form>
              <ToastContainer />
              {/* End Contact Form */}
            </div>
          </div>
        </div>
        {/* End Right Column */}
      </div>
    </div>
  );
}
