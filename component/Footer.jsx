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
export function Nav({carouselRef,boxRef}) {
    const handleScroll = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container-fluid px-3">
                <a className="navbar-brand" style={{fontSize: "30px"}} href="#">EduAct</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto" style={{ gap: "20px" ,fontSize: "18px"}}>
                        <li className="nav-item"><a className="nav-link" href="#" onClick={() => handleScroll(carouselRef)}>Profile</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Example</a></li>
                        <li className="nav-item"><a className="nav-link" href="#" onClick={() => handleScroll(boxRef)}>Predict</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

/*กล่องสำหรับใส่ข้อมูลเพื่อทำนาย*/ 
export function Box() {
    const [faculty, setFaculty] = useState("");
    // const [department, setDepartment] = useState(""); //ภาควิชา
    const [major, setMajor] = useState(""); //สาขาวิชา
    // const [age, setAge] = useState(""); //อายุ
    const [year, setYear] = useState(""); //ชั้นปี
    const [activity, setActivity] = useState(null); //กิจกรรม
    const [result, setResult] = useState(null); //การแสดงผล
    const [selected, setSelected] = useState(null); //การเข้าร่วมกิจกรรม
    const [review, setReview] = useState(null); //การอ่านหนังสือ
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
    const handleSubmit = (event) => {
      event.preventDefault();
      if (!faculty || !major || !year || !activity || !selected || !review) {
        setResult("⚠️ โปรดกรอกข้อมูลให้ครบถ้วน!");
        return;
      }
      console.log("Final event state:", event);

      setResult(`คณะ ${faculty} ภาควิชา ${major} ชั้นปีที่ ${year} เคยเข้าร่วมกิจกรรมไหม ${String(activity)} เข้าร่วมกิจกรรมบ่อยแค่ไหน ${selected} เวลาที่ใช้ในการทบทวนบทเรียน ${review}`);
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
          <h2 className="text-center text-primary mb-4" style={{ position: "sticky", top: "0", background: "rgba(235, 235, 235, 0.97)", paddingTop: "20px", paddingBottom: "20px", zIndex: 0 }}>🔮 Character Prediction 🔮</h2>
          <form onSubmit={handleSubmit}>
            {/*คณะ*/}
            <div className="mb-3">
              <label className="form-label">คณะ</label>
              <input type="text" className="form-control" value={faculty} onChange={(e) => setFaculty(e.target.value)} required />
            </div>
            {/* <div className="mb-3">
              <label className="form-label">Age</label>
              <input
                type="number"
                className="form-control"
                value={age}
                onChange={(e) => setAge(e.target.value.replace(/\D/, ""))}
                required
              />
            </div> */}
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
            {/*เข้าร่วมกิจกรรม*/}
            <div className="text-center mt-4 mb-4"
            style={{
              border: "2px solid rgb(255, 255, 255)",
              borderRadius: "15px", 
              padding: "20px",
              boxShadow: "5px 5px 15px rgba(30, 47, 51, 0.1), 5px 5px 15px rgba(183, 183, 184, 0.7)", 
              background: "rgb(255, 255, 255)"
            }}
            >
              <p className="fw-bold">เคยเข้าร่วมกิจกรรมไหม</p>
              <div className="d-flex justify-content-center align-items-center gap-3">
                <span className="fw-bold " style={{color: "#32CD32"}}>Yes</span>
                  {question.map((option) => (
                    <label key={option.value} className="position-relative">
                      <input
                        type="radio"
                        name="likert"
                        value={option.value}
                        checked={activity === option.value}
                        onChange={(e) => {
                          console.log("Event selected:", option.value);
                          setActivity(option.value);
                        }}
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
                        {activity === option.value && (
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
                <span className="fw-bold" style={{color: "#B22222"}}>No</span>
              </div>
            </div>
            {/**/}
            <div className="text-center mt-4 mb-4"
            style={{
              border: "2px solid rgb(255, 255, 255)",
              borderRadius: "15px", 
              padding: "20px",
              boxShadow: "5px 5px 15px rgba(30, 47, 51, 0.1), 5px 5px 15px rgba(183, 183, 184, 0.7)", 
              background: "rgb(255, 255, 255)"
            }}
            >
              <p className="fw-bold">เข้าร่วมกิจกรรมบ่อยแค่ไหน</p>
              <div className="d-flex justify-content-center align-items-center gap-3">
                <span className="fw-bold " style={{color: "#006400"}}>น้อย</span>
                {options.map((option) => (
                  <label key={option.value} className="position-relative">
                    <input
                      type="radio"
                      name="likert"
                      value={option.value}
                      checked={selected === option.value}
                      onChange={() => setSelected(option.value)}
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
                      {selected === option.value && (
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
              <p className="fw-bold">เวลาในการทบทวนบทเรียน</p>
              <div className="d-flex justify-content-center align-items-center gap-3">
                <span className="fw-bold " style={{color: "#006400"}}>น้อย</span>
                {options.map((option) => (
                  <label key={option.value} className="position-relative">
                    <input
                      type="radio"
                      name="likert"
                      value={option.value}
                      checked={review === option.value}
                      onChange={() => setReview(option.value)}
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
                      {review === option.value && (
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
            {/* <div className="mb-3">
              <label className="form-label">คุณใช้เวลาทบทวนบทเรียนกี่ชั่วโมงต่อสัปดาห์</label>
              <select className="form-select" value={review} onChange={(e) => setReview(e.target.value)}>
                <option value="" className="text-select" disabled>เลือกจำนวนชั่วโมง</option>
                <option value="< 3 ชม">น้อยกว่า 3 ชั่วโมง</option>
                <option value="3-6 ชม">3-6 ชั่วโมง</option>
                <option value="6-10 ชม">6-10 ชั่วโมง</option>
                <option value="> 10 ชม">มากกว่า 10 ชั่วโมง</option>
              </select>
            </div> */}
            <button type="submit" className="btn btn-primary w-100">🔍 Predict</button>
          </form>
          {result && <div className="alert alert-success mt-3 text-center">🎉 {result} 🎭</div>}
        </div>
      </div>
    );
}
