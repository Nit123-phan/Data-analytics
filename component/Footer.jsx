import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

/*ส่วนที่อยู่ด้านล่าง Footer*/
export function Footer() {
  return (
      <footer className="d-flex justify-content-end p-3 bg-dark text-light w-100 fixed-bottom">
          © 2025 Data analytics | Predict 🔮
      </footer>
  );
}

/*NavBar*/
export function Nav({carouselRef,boxRef,gradeRef}) {
    const handleScroll = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
    
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container-fluid px-3">
              <a className="navbar-brand" style={{ fontSize: "30px" }} href="javascript:void(0)">EduAct</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ms-auto" style={{ gap: "20px", fontSize: "18px" }}>
                      <li className="nav-item">
                          <a className="nav-link" href="javascript:void(0)" onClick={(e) => { e.preventDefault(); handleScroll(carouselRef); }}>
                              Profile
                          </a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="javascript:void(0)" onClick={(e) => { e.preventDefault(); handleScroll(gradeRef); }}>
                              Grade
                          </a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="javascript:void(0)" onClick={(e) => { e.preventDefault(); handleScroll(boxRef); }}>
                              Character
                          </a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
    );
}

/*กล่องสำหรับใส่ข้อมูลเพื่อทำนาย ตัวละคร*/ 
export function Box() {
    const [showModal, setShowModal] = useState(false); //ควบคุม Modal popup
    const [result, setResult] = useState(null); //การแสดงผล
    const [sex, setSex] = useState(""); //เพศ
    const [faculty, setFaculty] = useState(""); //คณะ
    const [major, setMajor] = useState(""); //สาขาวิชา
    const [year, setYear] = useState(""); //ชั้นปี
    const [one, setOne] = useState("");
    const [two, setTwo] = useState("");
    const [three, setThree] = useState("");
    const [four, setFour] = useState("");
    const [five, setFive] = useState("");
    const [six, setSix] = useState("");
    const [seven, setSeven] = useState("");
    const [eight, setEight] = useState("");
    const [nine, setNine] = useState("");
    const [ten, setTen] = useState("");
    const [eleven, setEleven] = useState("");
    const [twelve, setTwelve] = useState("");
    const [thirteen, setThirteen] = useState("");
    const [fourteen, setFourteen] = useState("");
    const [fifteen, setFifteen] = useState("");
    const [openness_new_experience, setExperience] = useState(null);
    const [conscientiousness_study_plan, setPlan] = useState(null);
    const [conscientiousness_on_time, setTime] = useState(null);
    const [extraversion_social_energy, setEnergy] = useState(null);
    const [extraversion_activity_participation, setParticipation] = useState(null);
    const [agreeableness_help_friends, setFriends] = useState(null);
    const [agreeableness_volunteer, setVolunteer] = useState(null);
    const [neuroticism_academic_stress, setStress] = useState(null);
    const [neuroticism_stress_handling, setHandling] = useState(null);
    const options = [
      { value: "1", size: "32px", color: "#006400" },
      { value: "2", size: "28px", color: "#32CD32" },
      { value: "3", size: "20px", color: "#bdc3c7" }, 
      { value: "4", size: "28px", color: "#B22222" },
      { value: "5", size: "32px", color: "#8B0000" },
    ];
    const question =[
      {value: "Yes", size: "24px", color: "#32CD32"},
      {value: "No", size: "24px", color: "#B22222"}
    ];

    const handleSubmit = async (event) => {
      event.preventDefault();
    
      if (![sex,    
            faculty,   
            major,    
            year,   
            one,
            two,
            three,
            four,
            five,
            six,
            seven,
            eight,
            nine,
            ten,
            eleven,
            twelve,
            fourteen,
            fifteen,
            openness_new_experience,
            conscientiousness_study_plan,
            conscientiousness_on_time,
            extraversion_social_energy,
            extraversion_activity_participation,
            agreeableness_help_friends,
            agreeableness_volunteer,
            neuroticism_academic_stress,
            neuroticism_stress_handling].every(Boolean)) {
        setResult("⚠️ โปรดกรอกข้อมูลให้ครบถ้วน!");
        setShowModal(true);
        return;
      }
    
      const formData = {
        sex,    //เพศ
        faculty,   //คณะ
        major,    //สาขา
        year,    //ชั้นปี
        one,
        two,
        three,
        four,
        five,
        six,
        seven,
        eight,
        nine,
        ten,
        eleven,
        twelve,
        fourteen,
        fifteen,
        openness_new_experience,
        conscientiousness_study_plan,
        conscientiousness_on_time,
        extraversion_social_energy,
        extraversion_activity_participation,
        agreeableness_help_friends,
        agreeableness_volunteer,
        neuroticism_academic_stress,
        neuroticism_stress_handling
      };
    
      try {
        const response = await fetch("http://localhost:5000/save-data", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
    
        if (!response.ok) {
          throw new Error("เกิดข้อผิดพลาดในการส่งข้อมูล");
        }
        setResult(`✅ ข้อมูลถูกบันทึกสำเร็จ!`);
      } catch (error) {
        setResult(`❌ ไม่สามารถบันทึกข้อมูลได้: ${error.message}`);
      }
    
      setShowModal(true);
    };

    return(
      <div className="flex-grow-1 d-flex justify-content-center align-items-center" style={{ minHeight: "100vh"}}>
        <div className="card shadow-lg" 
        style={{ 
          maxWidth: "500px", 
          width: "100%", 
          borderRadius: "15px",
          background: "rgba(235, 235, 235, 0.81)",
          maxHeight: "80vh", // กำหนดความสูงสูงสุดของฟอร์ม
          overflowY: "auto", // เปิดให้เลื่อนขึ้นลงได้เมื่อฟอร์มยาวเกินไป
          paddingTop: "0", // ชิดขอบด้านบน
          paddingRight: "16px", // ห่างจากขวา
          paddingLeft: "16px", // ห่างจากซ้าย
          paddingBottom: "16px", // ห่างจากล่าง
         }}
        >
          <h2 className="text-center text-primary mb-4" style={{ position: "sticky", top: "0", background: "rgba(235, 235, 235, 0.97)", paddingTop: "20px", paddingBottom: "20px", zIndex: 0 }}>
            🔮 Character Prediction 🔮
          </h2>
          <form onSubmit={handleSubmit}>
            {/*คำถามในฟอร์ม*/}
            {/*คณะ*/}            
            <div className="mb-3">
              <label className="form-label">เพศ</label>
              <select className="form-select" value={sex} onChange={(e) => setSex(e.target.value)}>
                <option value="" className="text-select" disabled>เลือกเพศ</option>
                <option value="ชาย">ชาย</option>
                <option value="หญิง">หญิง</option>
                <option value="LGBTQ+">LGBTQ+</option>
              </select>
            </div> 
            <div className="mb-3">
              <label className="form-label">คณะ</label>
              <input type="text" className="form-control" value={faculty} onChange={(e) => setFaculty(e.target.value)} required />
            </div>
            {/*สาขาวิชา*/}
            <div className="mb-3">
              <label className="form-label">สาขาวิชา</label>
              <input type="text" className="form-control" value={major} onChange={(e) => setMajor(e.target.value)} required />
            </div>
            {/*ชั้นปี*/}
            <div className="mb-3">
              <label className="form-label">ชั้นปีที่</label>
              <select className="form-select" value={year} onChange={(e) => setYear(e.target.value)}>
                <option value="" className="text-select" disabled>เลือกระดับชั้นปี</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>

            <div className="mb-6 p-4 bg-white shadow-2xl rounded-2xl cursor-pointer" style={{ borderRadius: "20px", marginBottom: "10px" }}>
              <label className="block text-lg font-semibold text-gray-700 mb-4">
              1. คุณเข้าร่วมกิจกรรมภายในมหาวิทยาลัยหรือไม่
              </label>
              <div className="space-y-4 cursor-pointer p-2">
                {[
                  { id: "choice1", value: "เข้าร่วมเป็นประจำ", label: "เข้าร่วมเป็นประจำ" },
                  { id: "choice2", value: "เข้าร่วมเป็นบางครั้ง", label: "เข้าร่วมเป็นบางครั้ง" },
                  { id: "choice3", value: "ไม่ค่อยเข้าร่วม", label: "ไม่ค่อยเข้าร่วม" },
                  { id: "choice4", value: "ไม่เคยเข้าร่วม", label: "ไม่เคยเข้าร่วม" }
                ].map((choice) => (
                <div
                  key={choice.id}
                  className="flex items-center p-4 border rounded-xl transition-all cursor-pointer shadow-md border-gray-300 hover:shadow-xl hover:-translate-y-1 bg-white gap-x-4"
                >
                  <input
                    className="form-check-input w-5 h-5 text-blue-500 focus:ring-blue-400 "
                    style={{marginRight: "10px"}}
                    type="radio"
                    id={choice.id}
                    name="activityImpact1"
                    value={choice.value}
                    checked={one === choice.value}
                    onChange={(e) => setOne(e.target.value)}
                  />
                  <label className="text-gray-800 text-md cursor-pointer" htmlFor={choice.id}>
                    {choice.label}
                  </label>
                </div>
                ))}
              </div>
            </div>
            <div className="mb-6 p-4 bg-white shadow-2xl rounded-2xl cursor-pointer" style={{ borderRadius: "20px", marginBottom: "10px" }}>
              <label className="block text-lg font-semibold text-gray-700 mb-4">
              2. คุณเข้าร่วมกิจกรรมประเภทใดบ้าง?
              </label>
              <div className="space-y-4 cursor-pointer p-2">
                {[
                  { id: "choice1", value: "กิจกรรมวิชาการ (งานสัมมนา , แข่งขันวิชาการ)", label: "กิจกรรมวิชาการ (งานสัมมนา , แข่งขันวิชาการ)" },
                  { id: "choice2", value: "กิจกรรมกีฬาและสุขภาพ", label: "กิจกรรมกีฬาและสุขภาพ" },
                  { id: "choice3", value: "กิจกรรมชมรม / สโมสร", label: "กิจกรรมชมรม / สโมสร" },
                  { id: "choice4", value: "กิจกรรมเพื่อสังคม (จิตอาสา , บำเพ็ญประโยชน์)", label: "กิจกรรมเพื่อสังคม (จิตอาสา , บำเพ็ญประโยชน์)" },
                  { id: "choice5", value: "กิจกรรมฝึกงาน / โครงการวิจัย", label: "กิจกรรมฝึกงาน / โครงการวิจัย" }
                ].map((choice) => (
                <div
                  key={choice.id}
                  className="flex items-center p-4 border rounded-xl transition-all cursor-pointer shadow-md border-gray-300 hover:shadow-xl hover:-translate-y-1 bg-white gap-x-4"
                >
                  <input
                    className="form-check-input w-5 h-5 text-blue-500 focus:ring-blue-400 "
                    style={{marginRight: "10px"}}
                    type="radio"
                    id={choice.id}
                    name="activityImpact2"
                    value={choice.value}
                    checked={two === choice.value}
                    onChange={(e) => setTwo(e.target.value)}
                  />
                  <label className="text-gray-800 text-md cursor-pointer" htmlFor={choice.id}>
                    {choice.label}
                  </label>
                </div>
                ))}
              </div>
            </div>
            <div className="mb-6 p-4 bg-white shadow-2xl rounded-2xl cursor-pointer" style={{ borderRadius: "20px", marginBottom: "10px" }}>
              <label className="block text-lg font-semibold text-gray-700 mb-4">
              3. บทบาทของคุณในการเข้าร่วมกิจกรรม
              </label>
              <div className="space-y-4 cursor-pointer p-2">
                {[
                  { id: "choice1", value: "ผู้เข้าร่วมทั่วไป", label: "ผู้เข้าร่วมทั่วไป" },
                  { id: "choice2", value: "กรรมการ / ผู้จัดกิจกรรม", label: "กรรมการ / ผู้จัดกิจกรรม" },
                  { id: "choice3", value: "หัวหน้าทีม / ประธานชมรม", label: "หัวหน้าทีม / ประธานชมรม" },
                ].map((choice) => (
                <div
                  key={choice.id}
                  className="flex items-center p-4 border rounded-xl transition-all cursor-pointer shadow-md border-gray-300 hover:shadow-xl hover:-translate-y-1 bg-white gap-x-4"
                >
                  <input
                    className="form-check-input w-5 h-5 text-blue-500 focus:ring-blue-400 "
                    style={{marginRight: "10px"}}
                    type="radio"
                    id={choice.id}
                    name="activityImpact3"
                    value={choice.value}
                    checked={three === choice.value}
                    onChange={(e) => setThree(e.target.value)}
                  />
                  <label className="text-gray-800 text-md cursor-pointer" htmlFor={choice.id}>
                    {choice.label}
                  </label>
                </div>
                ))}
              </div>
            </div>
            <div className="mb-6 p-4 bg-white shadow-2xl rounded-2xl cursor-pointer" style={{ borderRadius: "20px", marginBottom: "10px" }}>
              <label className="block text-lg font-semibold text-gray-700 mb-4">
              4. คุณเข้าร่วมกิจกรรมบ่อยแค่ไหน?
              </label>
              <div className="space-y-4 cursor-pointer p-2">
                {[
                  { id: "choice1", value: "ทุกสัปดาห์", label: "ทุกสัปดาห์" },
                  { id: "choice2", value: "ทุกเดือน", label: "ทุกเดือน" },
                  { id: "choice3", value: "เทอมละ 1-2 ครั้ง", label: "เทอมละ 1-2 ครั้ง" },
                  { id: "choice4", value: "ปีละ 1-2 ครั้ง", label: "ปีละ 1-2 ครั้ง" },
                  { id: "choice5", value: "ไม่เคยเข้าร่วมเลย", label: "ไม่เคยเข้าร่วมเลย" }
                ].map((choice) => (
                <div
                  key={choice.id}
                  className="flex items-center p-4 border rounded-xl transition-all cursor-pointer shadow-md border-gray-300 hover:shadow-xl hover:-translate-y-1 bg-white gap-x-4"
                >
                  <input
                    className="form-check-input w-5 h-5 text-blue-500 focus:ring-blue-400 "
                    style={{marginRight: "10px"}}
                    type="radio"
                    id={choice.id}
                    name="activityImpact4"
                    value={choice.value}
                    checked={four === choice.value}
                    onChange={(e) => setFour(e.target.value)}
                  />
                  <label className="text-gray-800 text-md cursor-pointer" htmlFor={choice.id}>
                    {choice.label}
                  </label>
                </div>
                ))}
              </div>
            </div>
            <div className="mb-6 p-4 bg-white shadow-2xl rounded-2xl cursor-pointer" style={{ borderRadius: "20px", marginBottom: "10px" }}>
              <label className="block text-lg font-semibold text-gray-700 mb-4">
              5. เหตุผลหลักที่คุณเข้าร่วมกิจกรรมคืออะไร?
              </label>
              <div className="space-y-4 cursor-pointer p-2">
                {[
                  { id: "choice1", value: "เพื่อพัฒนาทักษะเพิ่มเติม", label: "เพื่อพัฒนาทักษะเพิ่มเติม" },
                  { id: "choice2", value: "เพื่อเพิ่มโอกาสทางอาชีพ / Portfolio", label: "เพื่อเพิ่มโอกาสทางอาชีพ / Portfolio" },
                  { id: "choice3", value: "เพื่อพบปะเพื่อนใหม่", label: "เพื่อพบปะเพื่อนใหม่" },
                  { id: "choice4", value: "เพื่อหาประสบการณ์ใหม่ๆ", label: "เพื่อหาประสบการณ์ใหม่ๆ" },
                  { id: "choice5", value: "เพราะเป็นข้อบังคับของหลักสูตร", label: "เพราะเป็นข้อบังคับของหลักสูตร" }
                ].map((choice) => (
                <div
                  key={choice.id}
                  className="flex items-center p-4 border rounded-xl transition-all cursor-pointer shadow-md border-gray-300 hover:shadow-xl hover:-translate-y-1 bg-white gap-x-4"
                >
                  <input
                    className="form-check-input w-5 h-5 text-blue-500 focus:ring-blue-400 "
                    style={{marginRight: "10px"}}
                    type="radio"
                    id={choice.id}
                    name="activityImpact5"
                    value={choice.value}
                    checked={five === choice.value}
                    onChange={(e) => setFive(e.target.value)}
                  />
                  <label className="text-gray-800 text-md cursor-pointer" htmlFor={choice.id}>
                    {choice.label}
                  </label>
                </div>
                ))}
              </div>
            </div>
            <div className="mb-6 p-4 bg-white shadow-2xl rounded-2xl cursor-pointer" style={{ borderRadius: "20px", marginBottom: "10px" }}>
              <label className="block text-lg font-semibold text-gray-700 mb-4">
              6. หากคุณไม่ค่อยเข้าร่วมกิจกรรม อะไรเป็นสาเหตุหลัก?
              </label>
              <div className="space-y-4 cursor-pointer p-2">
                {[
                  { id: "choice1", value: "งานเรียนหนัก / เวลาว่างไม่พอ", label: "งานเรียนหนัก / เวลาว่างไม่พอ" },
                  { id: "choice2", value: "ไม่สนใจในกิจกรรมที่จัด", label: "ไม่สนใจในกิจกรรมที่จัด" },
                  { id: "choice3", value: "ไม่ทราบรายละเอียดของกิจกรรม", label: "ไม่ทราบรายละเอียดของกิจกรรม" },
                  { id: "choice4", value: "คิดว่ากิจกรรมไม่มีประโยชน์ต่อตัวเอง", label: "คิดว่ากิจกรรมไม่มีประโยชน์ต่อตัวเอง" }
                ].map((choice) => (
                <div
                  key={choice.id}
                  className="flex items-center p-4 border rounded-xl transition-all cursor-pointer shadow-md border-gray-300 hover:shadow-xl hover:-translate-y-1 bg-white gap-x-4"
                >
                  <input
                    className="form-check-input w-5 h-5 text-blue-500 focus:ring-blue-400 "
                    style={{marginRight: "10px"}}
                    type="radio"
                    id={choice.id}
                    name="activityImpact6"
                    value={choice.value}
                    checked={six === choice.value}
                    onChange={(e) => setSix(e.target.value)}
                  />
                  <label className="text-gray-800 text-md cursor-pointer" htmlFor={choice.id}>
                    {choice.label}
                  </label>
                </div>
                ))}
              </div>
            </div>
            <div className="mb-6 p-4 bg-white shadow-2xl rounded-2xl cursor-pointer" style={{ borderRadius: "20px", marginBottom: "10px" }}>
              <label className="block text-lg font-semibold text-gray-700 mb-4">
              7. คุณคิดว่าการเข้าร่วมกิจกรรมส่งผลต่อผลการเรียนของคุณหรือไม่?
              </label>
              <div className="space-y-4 cursor-pointer p-2">
                {[
                  { id: "choice1", value: "ส่งผลดี", label: "ส่งผลดี" },
                  { id: "choice2", value: "ไม่มีผล", label: "ไม่มีผล" },
                  { id: "choice3", value: "ส่งผลเสีย", label: "ส่งผลเสีย" }
                ].map((choice) => (
                <div
                  key={choice.id}
                  className="flex items-center p-4 border rounded-xl transition-all cursor-pointer shadow-md border-gray-300 hover:shadow-xl hover:-translate-y-1 bg-white gap-x-4"
                >
                  <input
                    className="form-check-input w-5 h-5 text-blue-500 focus:ring-blue-400 "
                    style={{marginRight: "10px"}}
                    type="radio"
                    id={choice.id}
                    name="activityImpact7"
                    value={choice.value}
                    checked={seven === choice.value}
                    onChange={(e) => setSeven(e.target.value)}
                  />
                  <label className="text-gray-800 text-md cursor-pointer" htmlFor={choice.id}>
                    {choice.label}
                  </label>
                </div>
                ))}
              </div>
            </div>
            <div className="mb-6 p-4 bg-white shadow-2xl rounded-2xl cursor-pointer" style={{ borderRadius: "20px", marginBottom: "10px" }}>
              <label className="block text-lg font-semibold text-gray-700 mb-4">
              8. คุณคิดว่ากิจกรรมที่เข้าร่วมช่วยพัฒนาทักษะการเรียนของคุณอย่างไร?  
              </label>
              <div className="space-y-4 cursor-pointer p-2">
                {[
                  { id: "choice1", value: "ช่วยให้จัดลำดับความสำคัญได้ดีขึ้น", label: "ช่วยให้จัดลำดับความสำคัญได้ดีขึ้น" },
                  { id: "choice2", value: "ช่วยให้มีวินัยในการเรียนมากขึ้น", label: "ช่วยให้มีวินัยในการเรียนมากขึ้น" },
                  { id: "choice3", value: "ช่วยให้ทำงานเป็นทีมได้ดีขึ้น", label: "ช่วยให้ทำงานเป็นทีมได้ดีขึ้น" },
                  { id: "choice4", value: "ช่วยพัฒนาทักษะการสื่อสารในการเรียน", label: "ช่วยพัฒนาทักษะการสื่อสารในการเรียน" },
                  { id: "choice5", value: "ไม่ได้ช่วยในการเรียน", label: "ไม่ได้ช่วยในการเรียน" }
                ].map((choice) => (
                <div
                  key={choice.id}
                  className="flex items-center p-4 border rounded-xl transition-all cursor-pointer shadow-md border-gray-300 hover:shadow-xl hover:-translate-y-1 bg-white gap-x-4"
                >
                  <input
                    className="form-check-input w-5 h-5 text-blue-500 focus:ring-blue-400 "
                    style={{marginRight: "10px"}}
                    type="radio"
                    id={choice.id}
                    name="activityImpact8"
                    value={choice.value}
                    checked={eight === choice.value}
                    onChange={(e) => setEight(e.target.value)}
                  />
                  <label className="text-gray-800 text-md cursor-pointer" htmlFor={choice.id}>
                    {choice.label}
                  </label>
                </div>
                ))}
              </div>
            </div>
            <div className="mb-6 p-4 bg-white shadow-2xl rounded-2xl cursor-pointer" style={{ borderRadius: "20px", marginBottom: "10px" }}>
              <label className="block text-lg font-semibold text-gray-700 mb-4">
              9. คุณเคยต้องลดเวลาในการทำกิจกรรมเพื่อโฟกัสกับการเรียนหรือไม่?  
              </label>
              <div className="space-y-4 cursor-pointer p-2">
                {[
                  { id: "choice1", value: "เคย", label: "เคย" },
                  { id: "choice2", value: "ไม่เคย", label: "ไม่เคย" }
                ].map((choice) => (
                <div
                  key={choice.id}
                  className="flex items-center p-4 border rounded-xl transition-all cursor-pointer shadow-md border-gray-300 hover:shadow-xl hover:-translate-y-1 bg-white gap-x-4"
                >
                  <input
                    className="form-check-input w-5 h-5 text-blue-500 focus:ring-blue-400 "
                    style={{marginRight: "10px"}}
                    type="radio"
                    id={choice.id}
                    name="activityImpact9"
                    value={choice.value}
                    checked={nine === choice.value}
                    onChange={(e) => setNine(e.target.value)}
                  />
                  <label className="text-gray-800 text-md cursor-pointer" htmlFor={choice.id}>
                    {choice.label}
                  </label>
                </div>
                ))}
              </div>
            </div>
            <div className="mb-6 p-4 bg-white shadow-2xl rounded-2xl cursor-pointer" style={{ borderRadius: "20px", marginBottom: "10px" }}>
              <label className="block text-lg font-semibold text-gray-700 mb-4">
              10. คุณเคยรู้สึกว่ากิจกรรมรบกวนเวลาการเรียนหรือไม่?    
              </label>
              <div className="space-y-4 cursor-pointer p-2">
                {[
                  { id: "choice1", value: "บ่อยมาก", label: "บ่อยมาก" },
                  { id: "choice2", value: "บางครั้ง", label: "บางครั้ง" },
                  { id: "choice3", value: "ไม่เคย", label: "ไม่เคย" }
                ].map((choice) => (
                <div
                  key={choice.id}
                  className="flex items-center p-4 border rounded-xl transition-all cursor-pointer shadow-md border-gray-300 hover:shadow-xl hover:-translate-y-1 bg-white gap-x-4"
                >
                  <input
                    className="form-check-input w-5 h-5 text-blue-500 focus:ring-blue-400 "
                    style={{marginRight: "10px"}}
                    type="radio"
                    id={choice.id}
                    name="activityImpact10"
                    value={choice.value}
                    checked={ten === choice.value}
                    onChange={(e) => setTen(e.target.value)}
                  />
                  <label className="text-gray-800 text-md cursor-pointer" htmlFor={choice.id}>
                    {choice.label}
                  </label>
                </div>
                ))}
              </div>
            </div>
            <div className="mb-6 p-4 bg-white shadow-2xl rounded-2xl cursor-pointer" style={{ borderRadius: "20px", marginBottom: "10px" }}>
              <label className="block text-lg font-semibold text-gray-700 mb-4">
              11. คุณเคยประสบปัญหาด้านใดเนื่องจากการเข้าร่วมกิจกรรม?    
              </label>
              <div className="space-y-4 cursor-pointer p-2">
                {[
                  { id: "choice1", value: "เวลาเรียนไม่เพียงพอ", label: "เวลาเรียนไม่เพียงพอ" },
                  { id: "choice2", value: "ไม่มีเวลาทบทวนบทเรียนก่อนสอบ", label: "ไม่มีเวลาทบทวนบทเรียนก่อนสอบ" },
                  { id: "choice3", value: "ทำให้ส่งงานไม่ทัน", label: "ทำให้ส่งงานไม่ทัน" },
                  { id: "choice4", value: "เหนื่อยล้าจากกิจกรรมจนส่งผลต่อการเรียน", label: "เหนื่อยล้าจากกิจกรรมจนส่งผลต่อการเรียน" },
                  { id: "choice5", value: "ไม่มีปัญหา", label: "ไม่มีปัญหา" }
                ].map((choice) => (
                <div
                  key={choice.id}
                  className="flex items-center p-4 border rounded-xl transition-all cursor-pointer shadow-md border-gray-300 hover:shadow-xl hover:-translate-y-1 bg-white gap-x-4"
                >
                  <input
                    className="form-check-input w-5 h-5 text-blue-500 focus:ring-blue-400 "
                    style={{marginRight: "10px"}}
                    type="radio"
                    id={choice.id}
                    name="activityImpact11"
                    value={choice.value}
                    checked={eleven === choice.value}
                    onChange={(e) => setEleven(e.target.value)}
                  />
                  <label className="text-gray-800 text-md cursor-pointer" htmlFor={choice.id}>
                    {choice.label}
                  </label>
                </div>
                ))}
              </div>
            </div>
            <div className="mb-6 p-4 bg-white shadow-2xl rounded-2xl cursor-pointer" style={{ borderRadius: "20px", marginBottom: "10px" }}>
              <label className="block text-lg font-semibold text-gray-700 mb-4">
              12. คุณใช้เวลาทบทวนบทเรียนกี่ชั่วโมงต่อสัปดาห์?   
              </label>
              <div className="space-y-4 cursor-pointer p-2">
                {[
                  { id: "choice1", value: "น้อยกว่า 3 ชั่วโมง", label: "น้อยกว่า 3 ชั่วโมง" },
                  { id: "choice2", value: "3-6 ชั่วโมง", label: "3-6 ชั่วโมง" },
                  { id: "choice3", value: "6-10 ชั่วโมง", label: "6-10 ชั่วโมง" },
                  { id: "choice4", value: "มากกว่า 10 ชั่วโมง", label: "มากกว่า 10 ชั่วโมง" }
                ].map((choice) => (
                <div
                  key={choice.id}
                  className="flex items-center p-4 border rounded-xl transition-all cursor-pointer shadow-md border-gray-300 hover:shadow-xl hover:-translate-y-1 bg-white gap-x-4"
                >
                  <input
                    className="form-check-input w-5 h-5 text-blue-500 focus:ring-blue-400 "
                    style={{marginRight: "10px"}}
                    type="radio"
                    id={choice.id}
                    name="activityImpact12"
                    value={choice.value}
                    checked={twelve === choice.value}
                    onChange={(e) => setTwelve(e.target.value)}
                  />
                  <label className="text-gray-800 text-md cursor-pointer" htmlFor={choice.id}>
                    {choice.label}
                  </label>
                </div>
                ))}
              </div>
            </div>
            <div className="mb-6 p-4 bg-white shadow-2xl rounded-2xl cursor-pointer" style={{ borderRadius: "20px", marginBottom: "10px" }}>
              <label className="block text-lg font-semibold text-gray-700 mb-4">
              13. คุณคิดว่าคุณสามารถจัดสมดุลระหว่างการเรียนและกิจกรรมได้ดีแค่ไหน? 
              </label>
              <div className="space-y-4 cursor-pointer p-2">
                {[
                  { id: "choice1", value: "จัดการได้ดีมาก", label: "จัดการได้ดีมาก" },
                  { id: "choice2", value: "ค่อนข้างดี", label: "ค่อนข้างดี" },
                  { id: "choice3", value: "ปานกลาง", label: "ปานกลาง" },
                  { id: "choice4", value: "ค่อนข้างแย่", label: "ค่อนข้างแย่" },
                  { id: "choice5", value: "แย่มาก", label: "แย่มาก" }
                ].map((choice) => (
                <div
                  key={choice.id}
                  className="flex items-center p-4 border rounded-xl transition-all cursor-pointer shadow-md border-gray-300 hover:shadow-xl hover:-translate-y-1 bg-white gap-x-4"
                >
                  <input
                    className="form-check-input w-5 h-5 text-blue-500 focus:ring-blue-400 "
                    style={{marginRight: "10px"}}
                    type="radio"
                    id={choice.id}
                    name="activityImpact13"
                    value={choice.value}
                    checked={thirteen === choice.value}
                    onChange={(e) => setThirteen(e.target.value)}
                  />
                  <label className="text-gray-800 text-md cursor-pointer" htmlFor={choice.id}>
                    {choice.label}
                  </label>
                </div>
                ))}
              </div>
            </div>
            <div className="mb-6 p-4 bg-white shadow-2xl rounded-2xl cursor-pointer" style={{ borderRadius: "20px", marginBottom: "10px" }}>
              <label className="block text-lg font-semibold text-gray-700 mb-4">
              14. คุณใช้วิธีใดในการจัดการเวลาระหว่างการเรียนและกิจกรรม? 
              </label>
              <div className="space-y-4 cursor-pointer p-2">
                {[
                  { id: "choice1", value: "ทำตารางเวลาล่วงหน้า", label: "ทำตารางเวลาล่วงหน้า" },
                  { id: "choice2", value: "ใช้แอปพลิเคชั่นจัดการเวลา", label: "ใช้แอปพลิเคชั่นจัดการเวลา" },
                  { id: "choice3", value: "แบ่งเวลาชัดเจนระหว่างเรียนและกิจกรรม", label: "แบ่งเวลาชัดเจนระหว่างเรียนและกิจกรรม" },
                  { id: "choice4", value: "ลดเวลาพักผ่อนเพื่อให้ทำกิจกรรมได้", label: "ลดเวลาพักผ่อนเพื่อให้ทำกิจกรรมได้" },
                  { id: "choice5", value: "ไม่ได้วางแผนอะไรเป็นพิเศษ", label: "ไม่ได้วางแผนอะไรเป็นพิเศษ" }
                ].map((choice) => (
                <div
                  key={choice.id}
                  className="flex items-center p-4 border rounded-xl transition-all cursor-pointer shadow-md border-gray-300 hover:shadow-xl hover:-translate-y-1 bg-white gap-x-4"
                >
                  <input
                    className="form-check-input w-5 h-5 text-blue-500 focus:ring-blue-400 "
                    style={{marginRight: "10px"}}
                    type="radio"
                    id={choice.id}
                    name="activityImpact14"
                    value={choice.value}
                    checked={fourteen === choice.value}
                    onChange={(e) => setFourteen(e.target.value)}
                  />
                  <label className="text-gray-800 text-md cursor-pointer" htmlFor={choice.id}>
                    {choice.label}
                  </label>
                </div>
                ))}
              </div>
            </div>
            <div className="mb-6 p-4 bg-white shadow-2xl rounded-2xl cursor-pointer" style={{ borderRadius: "20px", marginBottom: "10px" }}>
              <label className="block text-lg font-semibold text-gray-700 mb-4">
              15. คุณคิดว่ามหาวิทยาลัยควรมีมาตรการช่วยเหลือนักศึกษาที่เข้าร่วมกิจกรรมอย่างไร?      
              </label>
              <div className="space-y-4 cursor-pointer p-2">
                {[
                  { id: "choice1", value: "จัดตารางกิจกรรมให้ไม่ชนกับเวลาเรียน", label: "จัดตารางกิจกรรมให้ไม่ชนกับเวลาเรียน" },
                  { id: "choice2", value: "มีระบบสนับสนุนด้านการเรียนสำหรับนักศึกษาที่เข้าร่วมกิจกรรม", label: "มีระบบสนับสนุนด้านการเรียนสำหรับนักศึกษาที่เข้าร่วมกิจกรรม" },
                  { id: "choice3", value: "ให้ชั่วโมงกิจกรรมสำหรับนักศึกษาที่เข้าร่วมกิจกรรม(ทุกกิจกรรม)", label: "ให้ชั่วโมงกิจกรรมสำหรับนักศึกษาที่เข้าร่วมกิจกรรม(ทุกกิจกรรม)" },
                  { id: "choice4", value: "มีทุนสนับสนุนสำหรับนักศึกษาที่ทำกิจกรรมได้โดดเด่น", label: "มีทุนสนับสนุนสำหรับนักศึกษาที่ทำกิจกรรมได้โดดเด่น" },
                  { id: "choice5", value: "ไม่มีความจำเป็นต้องช่วยเหลือเพิ่มเติม", label: "ไม่มีความจำเป็นต้องช่วยเหลือเพิ่มเติม" }
                ].map((choice) => (
                <div
                  key={choice.id}
                  className="flex items-center p-4 border rounded-xl transition-all cursor-pointer shadow-md border-gray-300 hover:shadow-xl hover:-translate-y-1 bg-white gap-x-4"
                >
                  <input
                    className="form-check-input w-5 h-5 text-blue-500 focus:ring-blue-400 "
                    style={{marginRight: "10px"}}
                    type="radio"
                    id={choice.id}
                    name="activityImpact15"
                    value={choice.value}
                    checked={fifteen === choice.value}
                    onChange={(e) => setFifteen(e.target.value)}
                  />
                  <label className="text-gray-800 text-md cursor-pointer" htmlFor={choice.id}>
                    {choice.label}
                  </label>
                </div>
                ))}
              </div>
            </div>
            <div className="text-center mt-4 mb-4"
            style={{
              border: "2px solid rgb(255, 255, 255)",
              borderRadius: "15px", 
              padding: "20px",
              boxShadow: "5px 5px 15px rgba(30, 47, 51, 0.1), 5px 5px 15px rgba(183, 183, 184, 0.7)", 
              background: "rgb(255, 255, 255)"
            }}
            >
              <p className="fw-bold">ชอบลองสิ่งใหม่ๆ หรือเรียนรู้ทักษะใหม่ๆ นอกหลักสูตรหรือไม่</p>
              <div className="d-flex justify-content-center align-items-center gap-3">
                <span className="fw-bold " style={{color: "#006400"}}>น้อย</span>
                {options.map((option) => (
                  <label key={option.value} className="position-relative">
                    <input
                      type="radio"
                      name="likert"
                      value={option.value}
                      checked={openness_new_experience === option.value}
                      onChange={() => setExperience(option.value)}
                      className="d-none"
                    />
                    <span
                      className="radio-btn"
                      style={{
                        width: option.size,
                        height: option.size,
                        border: `2px solid ${option.color}`,
                        borderRadius: "50%",
                        display: "inline-block",
                        cursor: "pointer",
                        position: "relative",
                      }}
                    >
                      {openness_new_experience === option.value && (
                        <span
                          style={{
                            width: "50%",
                            height: "50%",
                            backgroundColor: option.color,
                            borderRadius: "50%",
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                          }}
                        ></span>
                      )}
                    </span>
                  </label>
                ))}
                <span className="fw-bold" style={{color: "#8B0000"}}>มาก</span>
              </div>
            </div>
            <div className="text-center mt-4 mb-4"
            style={{
              border: "2px solid rgb(255, 255, 255)",
              borderRadius: "15px", 
              padding: "20px",
              boxShadow: "5px 5px 15px rgba(30, 47, 51, 0.1), 5px 5px 15px rgba(183, 183, 184, 0.7)", 
              background: "rgb(255, 255, 255)"
            }}
            >
              <p className="fw-bold">วางแผนการอ่านหนังสือล่วงหน้าหรือไม่</p>
              <div className="d-flex justify-content-center align-items-center gap-3">
                <span className="fw-bold " style={{color: "#006400"}}>น้อย</span>
                {options.map((option) => (
                  <label key={option.value} className="position-relative">
                    <input
                      type="radio"
                      name="likert"
                      value={option.value}
                      checked={conscientiousness_study_plan === option.value}
                      onChange={() => setPlan(option.value)}
                      className="d-none"
                    />
                    <span
                      className="radio-btn"
                      style={{
                        width: option.size,
                        height: option.size,
                        border: `2px solid ${option.color}`,
                        borderRadius: "50%",
                        display: "inline-block",
                        cursor: "pointer",
                        position: "relative",
                      }}
                    >
                      {conscientiousness_study_plan === option.value && (
                        <span
                          style={{
                            width: "50%",
                            height: "50%",
                            backgroundColor: option.color,
                            borderRadius: "50%",
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                          }}
                        ></span>
                      )}
                    </span>
                  </label>
                ))}
                <span className="fw-bold" style={{color: "#8B0000"}}>มาก</span>
              </div>
            </div>
            <div className="text-center mt-4 mb-4"
            style={{
              border: "2px solid rgb(255, 255, 255)",
              borderRadius: "15px", 
              padding: "20px",
              boxShadow: "5px 5px 15px rgba(30, 47, 51, 0.1), 5px 5px 15px rgba(183, 183, 184, 0.7)", 
              background: "rgb(255, 255, 255)"
            }}
            >
              <p className="fw-bold">ทำงานหรือส่งการบ้านตรงเวลาหรือไม่</p>
              <div className="d-flex justify-content-center align-items-center gap-3">
                <span className="fw-bold " style={{color: "#006400"}}>น้อย</span>
                {options.map((option) => (
                  <label key={option.value} className="position-relative">
                    <input
                      type="radio"
                      name="likert"
                      value={option.value}
                      checked={conscientiousness_on_time === option.value}
                      onChange={() => setTime(option.value)}
                      className="d-none"
                    />
                    <span
                      className="radio-btn"
                      style={{
                        width: option.size,
                        height: option.size,
                        border: `2px solid ${option.color}`,
                        borderRadius: "50%",
                        display: "inline-block",
                        cursor: "pointer",
                        position: "relative",
                      }}
                    >
                      {conscientiousness_on_time === option.value && (
                        <span
                          style={{
                            width: "50%",
                            height: "50%",
                            backgroundColor: option.color,
                            borderRadius: "50%",
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                          }}
                        ></span>
                      )}
                    </span>
                  </label>
                ))}
                <span className="fw-bold" style={{color: "#8B0000"}}>มาก</span>
              </div>
            </div>
            <div className="text-center mt-4 mb-4"
            style={{
              border: "2px solid rgb(255, 255, 255)",
              borderRadius: "15px", 
              padding: "20px",
              boxShadow: "5px 5px 15px rgba(30, 47, 51, 0.1), 5px 5px 15px rgba(183, 183, 184, 0.7)", 
              background: "rgb(255, 255, 255)"
            }}
            >
              <p className="fw-bold">รู้สึกมีพลังเมื่อได้อยู่ร่วมกับผู้คนจำนวนมากหรือไม่</p>
              <div className="d-flex justify-content-center align-items-center gap-3">
                <span className="fw-bold " style={{color: "#006400"}}>น้อย</span>
                {options.map((option) => (
                  <label key={option.value} className="position-relative">
                    <input
                      type="radio"
                      name="likert"
                      value={option.value}
                      checked={extraversion_social_energy === option.value}
                      onChange={() => setEnergy(option.value)}
                      className="d-none"
                    />
                    <span
                      className="radio-btn"
                      style={{
                        width: option.size,
                        height: option.size,
                        border: `2px solid ${option.color}`,
                        borderRadius: "50%",
                        display: "inline-block",
                        cursor: "pointer",
                        position: "relative",
                      }}
                    >
                      {extraversion_social_energy === option.value && (
                        <span
                          style={{
                            width: "50%",
                            height: "50%",
                            backgroundColor: option.color,
                            borderRadius: "50%",
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                          }}
                        ></span>
                      )}
                    </span>
                  </label>
                ))}
                <span className="fw-bold" style={{color: "#8B0000"}}>มาก</span>
              </div>
            </div>
            <div className="text-center mt-4 mb-4"
            style={{
              border: "2px solid rgb(255, 255, 255)",
              borderRadius: "15px", 
              padding: "20px",
              boxShadow: "5px 5px 15px rgba(30, 47, 51, 0.1), 5px 5px 15px rgba(183, 183, 184, 0.7)", 
              background: "rgb(255, 255, 255)"
            }}
            >
              <p className="fw-bold">ชอบเข้าร่วมกิจกรรมของมหาวิทยาลัยหรือไม่</p>
              <div className="d-flex justify-content-center align-items-center gap-3">
                <span className="fw-bold " style={{color: "#006400"}}>น้อย</span>
                {options.map((option) => (
                  <label key={option.value} className="position-relative">
                    <input
                      type="radio"
                      name="likert"
                      value={option.value}
                      checked={extraversion_activity_participation === option.value}
                      onChange={() => setParticipation(option.value)}
                      className="d-none"
                    />
                    <span
                      className="radio-btn"
                      style={{
                        width: option.size,
                        height: option.size,
                        border: `2px solid ${option.color}`,
                        borderRadius: "50%",
                        display: "inline-block",
                        cursor: "pointer",
                        position: "relative",
                      }}
                    >
                      {extraversion_activity_participation === option.value && (
                        <span
                          style={{
                            width: "50%",
                            height: "50%",
                            backgroundColor: option.color,
                            borderRadius: "50%",
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                          }}
                        ></span>
                      )}
                    </span>
                  </label>
                ))}
                <span className="fw-bold" style={{color: "#8B0000"}}>มาก</span>
              </div>
            </div>
            <div className="text-center mt-4 mb-4"
            style={{
              border: "2px solid rgb(255, 255, 255)",
              borderRadius: "15px", 
              padding: "20px",
              boxShadow: "5px 5px 15px rgba(30, 47, 51, 0.1), 5px 5px 15px rgba(183, 183, 184, 0.7)", 
              background: "rgb(255, 255, 255)"
            }}
            >
              <p className="fw-bold">ช่วยเหลือเพื่อนๆ เวลาที่พวกเขามีปัญหาในการเรียนหรือไม่</p>
              <div className="d-flex justify-content-center align-items-center gap-3">
                <span className="fw-bold " style={{color: "#006400"}}>น้อย</span>
                {options.map((option) => (
                  <label key={option.value} className="position-relative">
                    <input
                      type="radio"
                      name="likert"
                      value={option.value}
                      checked={agreeableness_help_friends === option.value}
                      onChange={() => setFriends(option.value)}
                      className="d-none"
                    />
                    <span
                      className="radio-btn"
                      style={{
                        width: option.size,
                        height: option.size,
                        border: `2px solid ${option.color}`,
                        borderRadius: "50%",
                        display: "inline-block",
                        cursor: "pointer",
                        position: "relative",
                      }}
                    >
                      {agreeableness_help_friends === option.value && (
                        <span
                          style={{
                            width: "50%",
                            height: "50%",
                            backgroundColor: option.color,
                            borderRadius: "50%",
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                          }}
                        ></span>
                      )}
                    </span>
                  </label>
                ))}
                <span className="fw-bold" style={{color: "#8B0000"}}>มาก</span>
              </div>
            </div>
            <div className="text-center mt-4 mb-4"
            style={{
              border: "2px solid rgb(255, 255, 255)",
              borderRadius: "15px", 
              padding: "20px",
              boxShadow: "5px 5px 15px rgba(30, 47, 51, 0.1), 5px 5px 15px rgba(183, 183, 184, 0.7)", 
              background: "rgb(255, 255, 255)"
            }}
            >
              <p className="fw-bold">เข้าร่วมกิจกรรมอาสาสมัครหรือช่วยเหลือสังคมหรือไม่</p>
              <div className="d-flex justify-content-center align-items-center gap-3">
                <span className="fw-bold " style={{color: "#006400"}}>น้อย</span>
                {options.map((option) => (
                  <label key={option.value} className="position-relative">
                    <input
                      type="radio"
                      name="likert"
                      value={option.value}
                      checked={agreeableness_volunteer === option.value}
                      onChange={() => setVolunteer(option.value)}
                      className="d-none"
                    />
                    <span
                      className="radio-btn"
                      style={{
                        width: option.size,
                        height: option.size,
                        border: `2px solid ${option.color}`,
                        borderRadius: "50%",
                        display: "inline-block",
                        cursor: "pointer",
                        position: "relative",
                      }}
                    >
                      {agreeableness_volunteer === option.value && (
                        <span
                          style={{
                            width: "50%",
                            height: "50%",
                            backgroundColor: option.color,
                            borderRadius: "50%",
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                          }}
                        ></span>
                      )}
                    </span>
                  </label>
                ))}
                <span className="fw-bold" style={{color: "#8B0000"}}>มาก</span>
              </div>
            </div>
            <div className="text-center mt-4 mb-4"
            style={{
              border: "2px solid rgb(255, 255, 255)",
              borderRadius: "15px", 
              padding: "20px",
              boxShadow: "5px 5px 15px rgba(30, 47, 51, 0.1), 5px 5px 15px rgba(183, 183, 184, 0.7)", 
              background: "rgb(255, 255, 255)"
            }}
            >
              <p className="fw-bold">รู้สึกเครียดหรือกังวลเกี่ยวกับผลการเรียนบ่อยแค่ไหน</p>
              <div className="d-flex justify-content-center align-items-center gap-3">
                <span className="fw-bold " style={{color: "#006400"}}>น้อย</span>
                {options.map((option) => (
                  <label key={option.value} className="position-relative">
                    <input
                      type="radio"
                      name="likert"
                      value={option.value}
                      checked={neuroticism_academic_stress === option.value}
                      onChange={() => setStress(option.value)}
                      className="d-none"
                    />
                    <span
                      className="radio-btn"
                      style={{
                        width: option.size,
                        height: option.size,
                        border: `2px solid ${option.color}`,
                        borderRadius: "50%",
                        display: "inline-block",
                        cursor: "pointer",
                        position: "relative",
                      }}
                    >
                      {neuroticism_academic_stress === option.value && (
                        <span
                          style={{
                            width: "50%",
                            height: "50%",
                            backgroundColor: option.color,
                            borderRadius: "50%",
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                          }}
                        ></span>
                      )}
                    </span>
                  </label>
                ))}
                <span className="fw-bold" style={{color: "#8B0000"}}>มาก</span>
              </div>
            </div>
            <div className="text-center mt-4 mb-4"
            style={{
              border: "2px solid rgb(255, 255, 255)",
              borderRadius: "15px", 
              padding: "20px",
              boxShadow: "5px 5px 15px rgba(30, 47, 51, 0.1), 5px 5px 15px rgba(183, 183, 184, 0.7)", 
              background: "rgb(255, 255, 255)"
            }}
            >
              <p className="fw-bold">รับมือกับสถานการณ์กดดัน (เช่น สอบ) ได้ดีแค่ไหน</p>
              <div className="d-flex justify-content-center align-items-center gap-3">
                <span className="fw-bold " style={{color: "#006400"}}>น้อย</span>
                {options.map((option) => (
                  <label key={option.value} className="position-relative">
                    <input
                      type="radio"
                      name="likert"
                      value={option.value}
                      checked={neuroticism_stress_handling === option.value}
                      onChange={() => setHandling(option.value)}
                      className="d-none"
                    />
                    <span
                      className="radio-btn"
                      style={{
                        width: option.size,
                        height: option.size,
                        border: `2px solid ${option.color}`,
                        borderRadius: "50%",
                        display: "inline-block",
                        cursor: "pointer",
                        position: "relative",
                      }}
                    >
                      {neuroticism_stress_handling === option.value && (
                        <span
                          style={{
                            width: "50%",
                            height: "50%",
                            backgroundColor: option.color,
                            borderRadius: "50%",
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                          }}
                        ></span>
                      )}
                    </span>
                  </label>
                ))}
                <span className="fw-bold" style={{color: "#8B0000"}}>มาก</span>
              </div>
            </div>
            <button type="submit" className="btn btn-primary w-100">🔍 Predict</button>
          </form>
          {result && <div className="alert alert-success mt-3 text-center">🎉 {result} 🎭</div>}
        </div>

        {/*Modal popup*/}
        <div className={`modal fade ${showModal ? "show d-block" : ""}`} tabIndex="-1" style={{ background: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">🔍 Character</h5>
                    <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                </div>
                <div className="modal-body">
                    <p>{result}</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>ปิด</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
}
