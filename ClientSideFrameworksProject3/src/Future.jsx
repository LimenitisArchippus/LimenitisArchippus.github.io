//import './CSS/filename.css':

function Future(){
  return(
    <>
      <section id="future" className="text-gray-700  text-center">

          <h2 className="text-2xl font-semibold text-gray-800 text-center m-6 p-3 bg-aliceblue rounded-lg shadow-md">Future Technologies</h2>
          <div className="m-6 p-6 bg-aliceblue rounded-lg shadow-md">
            <p className="text-lg mb-4">
                We are exploring the cutting edge of technology to bring you the future of computing.  Here's a glimpse into what we're working on:
            </p>
            <ul className="list-disc list-inside space-y-2">
                <li className="text-lg"><strong>Artificial Intelligence (AI):</strong>  Developing AI-powered systems for enhanced user experience and productivity.</li>
                <li className="text-lg"><strong>Quantum Computing:</strong>  Researching quantum computing applications for solving complex problems.</li>
                <li className="text-lg"><strong>Augmented Reality (AR) and Virtual Reality (VR):</strong>  Creating immersive experiences for gaming, education, and professional training.</li>
                <li className="text-lg"><strong>5G and Beyond:</strong>  Implementing next-generation connectivity solutions for faster and more reliable communication.</li>
            </ul>
            <p className="text-lg mt-4">
                Stay tuned for exciting updates and new product releases as we continue to innovate and push the boundaries of technology.
            </p>
        </div>

      </section>
    </>
  );
}

export default Future;