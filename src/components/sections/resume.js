import resumePng from '../../resume.png'
import resume from '../../JeremiahDavidResume.pdf'


const MyResume = () => {


  return (
    <>
      <div className="resume">

        <a href={resume} download >
          <img className="resumePng" src={resumePng} alt="Jeremiah's Resume"/>
          <h5 className="downloadResume">Click to download Resume PDF</h5>
        </a>

      </div>
    </>
  );
}

export default MyResume;