import * as React from "react";

function Home() {
  return (
    <>
      <h3 className="question">Just a Random Question 1?</h3>
      <figure className="float-right text-center">
        <img
          src="https://live.staticflickr.com/4028/4359250205_f6dd842bee_z.jpg"
          alt="bear"
          width="150"
          height="150"
        />
        <figcaption>
          <a
            href="https://www.flickr.com/photos/roger_inkart/ "
            target="_blank"
            className="link font-semibold"
            rel="noreferrer noopener"
          >
            Author
          </a>
        </figcaption>
      </figure>
      <p className="text-lg mb-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        blandit ipsum sit amet eros auctor porttitor. Mauris porta orci at nulla
        pharetra, id elementum sapien pretium. Aliquam orci felis, vulputate sit
        amet sollicitudin ut, viverra at elit. Aliquam erat volutpat. Sed vel
        mauris gravida nisi viverra efficitur.
      </p>
      <h3 className="question">Just a Random Question 2?</h3>
      <p className="text-lg mb-5">
        Suspendisse porta rutrum pharetra. Etiam dignissim augue eget vehicula
        semper. Suspendisse et urna elementum,{" "}
        <span className="link">rutrum turpis et</span>, volutpat orci. Fusce
        aliquet vulputate nunc quis porttitor. Aenean eu gravida turpis.
      </p>
      <p className="text-lg mb-5">
        Ut commodo porta metus eu convallis. Etiam dapibus vulputate est, id
        dapibus tortor volutpat ut. Suspendisse ut ullamcorper arcu. Nullam ante{" "}
        <span className="link">lectus</span>,{" "}
        <span className="link">varius</span> non nisi{" "}
        <span className="link">eget</span>,{" "}
        <span className="link">molestie</span> sodales est. Praesent vulputate
        ligula nec justo scelerisque accumsan.
      </p>
      <p className="text-lg mb-8">
        Phasellus imperdiet diam mollis, maximus metus et, porta ligula. Etiam
        nisl felis, euismod non mattis a, posuere quis diam.
      </p>
      <h2 className="text-center link-extrabig link mb-6">
        Join and be part of the OhHi Community!
      </h2>
      <section className="grid grid-cols-2 grid-rows-13 gap-2">
        <h3 className="question">Getting Started</h3>
        <h2 className="link-big link row-start-2">Create</h2>
        <p className="row-start-3 ml-6">Lorem Ipsum Dolor Sit Amet</p>
        <h2 className="link-big link row-start-2">Update</h2>
        <p className="row-start-3 ml-6">Lorem Ipsum Dolor Sit Amet</p>
        <h2 className="link-big link row-start-4">Download</h2>
        <p className="row-start-5 ml-6">Lorem Ipsum Dolor Sit Amet</p>
        <h2 className="link-big link row-start-4">Customize</h2>
        <p className="row-start-5 ml-6">Lorem Ipsum Dolor Sit Amet</p>
        <h3 className="question row-start-6">Other Options</h3>
        <h2 className="link-big link row-start-7">Edit</h2>
        <p className="row-start-8 ml-6">Lorem Ipsum Dolor Sit Amet</p>
        <h2 className="link-big link row-start-7">Edit other Pages</h2>
        <p className="row-start-8 ml-6">Lorem Ipsum Dolor Sit Amet</p>
        <h2 className="link-big link row-start-9">Edit entries</h2>
        <p className="row-start-10 ml-6">Lorem Ipsum Dolor Sit Amet</p>
        <h3 className="question row-start-11">Documentation</h3>
        <h2 className="link-big link row-start-12">Edit entries</h2>
        <p className="row-start-13 ml-6">Lorem Ipsum Dolor Sit Amet</p>
        <h2 className="link-big link row-start-12">Contributors</h2>
        <p className="row-start-13 ml-6">Lorem Ipsum Dolor Sit Amet</p>
      </section>
    </>
  );
}

export default Home;
