import {BrowserRouter, Routes, Route,} from 'react-router-dom'; //npm i react-router-dom --save
import './App.css';
// import CreateUser from './components/CreateUser';
// import EditUser from './components/EditUser';
// import ListUser from './components/ListUser';
// import ListSchool from './components/ListSchool'
// import CreateSchool from './components/CreateSchool'
// import CreateNotice from './components/CreateNotice';
// import FeeManagementComponent from './components/Fees';
// import EditFees from './components/EditFees';
import Login from './components/Login'
import Dashboard from './components/Dashboard';
// import SignupLogin from './components/SignupLogin';
// import NoticeComponent from './components/GetNotice';
// import CreateTeacher from './components/CreateTeacher';
// import TeacherComponent from './components/GetTeacher';
// import FeedbackComponent from './components/Feedback';
// import CreateVirtualClassLink from './components/CreateClassLink';
// import ClassLinks from './components/GetClassLink';
// import ListSyllabus from './components/Syllabus';
import StudentManager from './components/StudentManager';
// import TeacherManager from './components/TeacherManage';
// import AddStudent from './components/AddStudent';
import AddTeacher from './components/Addteacher';
import TeacherManager from './components/TeacherManager';
import FetchStudent from './components/FetchStudent';
import EditStudent from './components/EditStudent2';
import TeacherComponent from './components/FetchTeacher';
import EditStudent2 from './components/EditStudent2';
import EditStudent1 from './components/EditStudent1';
import EditTeacher1 from './components/EditTeacher1.jsx';
import AddStudent from './components/AddStudent';
import LottieAnimations from './components/LottieAnimations.js';


function App() {
  return (
    // <div className="container">
    // <div className="App">
    //   <h1 class="page-header text-center">Ed-Sanchar Student Manager</h1>

      // <BrowserRouter>
      //   <Routes>
          {/* <Route exact path="dashboard/school" element={<ListSchool />}></Route> */}
          {/* <Route exact path="dashboard/Manager/ListUser" element={<ListUser />} /> */}
          {/* <Route exact path="dashboard/user/createStudent" element={<CreateUser />} /> */}
          {/* <Route exact path="dashboard/user/createTeacher" element={<CreateTeacher />} /> */}
          {/* <Route exact path="dashboard/TeacherManage/getTeacher" element={<TeacherComponent />} /> */}
          {/* <Route exact path="dashboard/user/user/:id/edit" element={<EditUser />} /> */}
                              {/* /user-fee/${fee.username}/edit-fees */}
          {/* <Route exact path="dashboard/user/user/:id/edit" element={<EditSyllabus />} /> */}

          {/* <Route exact path="dashboard/user/createSchool" element={<CreateSchool />} /> */}
          {/* <Route exact path="dashboard/user/createNotice" element={<CreateNotice />} /> */}
          {/* <Route exact path="dashboard/user/feedback" element={<FeedbackComponent />} /> */}
          {/* <Route exact path="dashboard/user/getNotice" element={<NoticeComponent/>} /> */}
          {/* <Route exact path="dashboard/user/createClassLink" element={<CreateVirtualClassLink/>} /> */}
          {/* <Route exact path="dashboard/user/ListSyllabus" element={<ListSyllabus/>} />
          <Route exact path="dashboard/user/ClassLinks" element={<ClassLinks/>} /> */}
          {/* <Route exact path="dashboard/user/FeeManagement" element={<FeeManagementComponent />} />
          <Route exact path="user-fee/:username/edit-fees" element={<EditFees />} /> */}
          {/* <Route exact path="dashboard" element={<Dashboard/>} />
          <Route exact path="dashboard/user/studentManage" element={<studentManage/>} />
          <Route exact path="/" element={<Login/>} /> */}
          {/* <Route exact path="/" element={<SignupLogin/>} /> */}
          {/* <Route exact path="dashboard/Manager/EditUser" element={<EditUser/>} /> */}
          {/* <Route exact path="dashboard/StudentManager" element={<StudentManager/>} /> */}
          {/* <Route exact path="dashboard/TeacherManager" element={<TeacherManager/>} /> */}
          {/* <Route exact path="dashboard/Manager/AddStudent" element={<AddStudent/>} /> */}
          {/* <Route exact path="dashboard/TeacherManage/AddTeacher" element={<AddTeacher/>} />
           */}
           {/* <Route exact path="dashboard/StudentManager/FetchStudent" element={<FetchStudent/>} />
           <Route exact path="dashboard/studentmanager/EditStudent1/EditStudent2" element={<EditStudent2/>}/>
           <Route exact path="dashboard/teachermanager/fetchteacher" element={<TeacherComponent/>}/>
           <Route exact path="dashboard/StudentManager/Editstudent1" element={<EditStudent1/>}/>
           <Route exact path="dashboard/TeacherManager/editTeacher1" element={<EditTeacher1/>}/>
           <Route exact path="dashboard/studentManager/AddStudent" element={<AddStudent/>}/>
           <Route exact path="dashboard/TeacherManager/AddTeacher" element={<AddTeacher/>}/>
 */}

          
        {/* </Routes>
      </BrowserRouter> */}
      <Stack.Navigator>
        <Stack.Screen name='LootieAnimations' components={LottieAnimations}/>
      </Stack.Navigator>
    // </div>
    // </div>
  );
}
 
export default App;

