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
                <a className="navbar-brand" style={{fontSize: "40px"}} href="#">EduAct</a>
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
    const [age, setAge] = useState("");
    const [year, setYear] = useState("");
    const [category, setCategory] = useState("warrior");
    const [result, setResult] = useState(null);
    const [selected, setSelected] = useState(null);
    const options = [
      { value: "1", size: "32px", color: "#006400" },
      { value: "2", size: "28px", color: "#32CD32" },
      { value: "3", size: "24px", color: "#90EE90" },
      { value: "4", size: "20px", color: "#bdc3c7" }, 
      { value: "5", size: "24px", color: "#FF6347" }, 
      { value: "6", size: "28px", color: "#B22222" },
      { value: "7", size: "32px", color: "#8B0000" },
    ];

    const handleSubmit = (event) => {
      event.preventDefault();
      if (!faculty || !year || !selected) {
        setResult("⚠️ โปรดกรอกข้อมูลให้ครบถ้วน!");
        return;
      }
      setResult(`คณะ ${faculty} ชั้นปีที่ ${year} เข้าร่วมกิจกรรมบ่อยแค่ไหน ${selected}`);
    };

    return(
      <div className="flex-grow-1 d-flex justify-content-center align-items-center" style={{ minHeight: "100vh"}}>
        <div className="card p-4 shadow-lg" 
        style={{ 
          maxWidth: "500px", 
          width: "100%", 
          borderRadius: "15px",
          background: "rgba(235, 235, 235, 0.81)"
         }}
        >
          <h2 className="text-center text-primary mb-4">🔮 Character Prediction 🔮</h2>
          <form onSubmit={handleSubmit}>
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
            {/* <div className="flex flex-col items-center justify-center space-y-4 w-full">
              <p className="text-gray-700 font-medium text-lg">
                คุณใช้เวลาทบทวนบทเรียนกี่ชั่วโมงต่อสัปดาห์
              </p>
              <div className="flex items-center justify-center w-full space-x-6">
                <span className="text-green-500 font-medium">น้อย</span>
                {[0, 1, 2, 3, 4, 5].map((value) => (
                  <label key={value} className="flex items-center">
                    <input
                      type="radio"
                      name="study-time"
                      value={value}
                      checked={review === value}
                      onChange={() => setReview(value)}
                      className="hidden"
                    />
                    <div
                      className={`w-8 h-8 rounded-full border-2 flex items-center justify-center cursor-pointer mx-3
                        ${review === value ? "bg-gray-500 text-white" : "border-gray-400"} 
                        ${value >= 3 ? "border-green-500" : "border-purple-500"}`}
                    />
                  </label>
                ))}
                <span className="text-purple-500 font-medium">มาก</span>
              </div>
            </div> */}

            {/* <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                คุณใช้เวลาทบทวนบทเรียนกี่ชั่วโมงต่อสัปดาห์?
              </h2>

              <div className="flex items-center justify-between w-full max-w-lg px-4">
                <span className="text-green-500 font-medium">น้อย</span>
                <div className="flex space-x-3">
                  {labels.map((value, index) => (
                    <label key={index} className="cursor-pointer relative flex flex-col items-center">
                      <input
                        type="radio"
                        name="study-time"
                        value={value}
                        checked={selected === value}
                        onChange={() => setSelected(value)}
                        className="hidden"
                      />
                      <div
                        className={`flex items-center justify-center rounded-full border-2 transition-all duration-300 ease-in-out
                          ${sizes[index]} ${selected === value ? "bg-gray-800 text-white scale-125 shadow-xl" : `${colors[index]} border-gray-300 hover:scale-110`}
                        `}
                      >
                        {value}
                      </div>
                    </label>
                  ))}
                </div>
                <span className="text-purple-500 font-medium">มาก</span>
              </div>
                
              {selected !== null && (
                <p className="text-lg font-medium text-gray-700 mt-4">
                  ✅ คุณเลือก: <span className="text-blue-600">{selected} ชั่วโมง</span>
                </p>
              )}
            </div> */}
            <button type="submit" className="btn btn-primary w-100">🔍 Predict</button>
          </form>
          {result && <div className="alert alert-success mt-3 text-center">🎉 {result} 🎭</div>}
        </div>
      </div>
    );
}