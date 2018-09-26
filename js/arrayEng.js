$(document).ready(function() {

    var JobArrayEng = [{
            "Category": "6", //1PM，2特殊，3QA，4前端，5後端，6行動，7系統，8UIUX
            "Job": "Android Developer", //職稱
            "WorkItem": [
            "・Familiar with JAVA and Android SDK, and have Android native App development experience for more than a year",
            "・Familiar with the Android Studio development environment",
            "・Have more than one year experience in Web services such as JSON and XML and serial Web API development",
            "・Can use interface development, have a certain degree of understanding of Fragment",
            "・Familiar with the MVC architecture",
            "・Can work independently or with the team, work attitude is positive, responsible, can cooperate with company regulations",
            "・It is especially good to be able to show past works",
            ],
        },
        {
            "Category": "1",
            "Job": "Technical Project Manager",
            "WorkItem":[
            "・Demonstrates up-to-date expertise in Program or Project Management and applies this to the development, execution, and improvement of action plans",
            "・Web/Mobile, cloud based software development experience",
            "・Develops Project Management best practices  and manage complex projects in an agile environment ",
            "・Builds roadmaps and leads the development of complex cloud based application projects and programs",
            "・Manages geographically distributed teams, off-shore development teams, and third-party vendors. Collaborate effectively with internal partner teams",
            "・Models compliance with company policies and procedures and supports company mission, values, and standards of ethics and integrity",
            "・Provides and supports the implementation of business solutions",
            "・Understand how to design scalable software. Possess a strong understanding of the software",
            "・Highly effective communication skills",
            ],
        },
        {
            "Category": "6",
            "Job": "iOS Developer",
            "WorkItem":[
            "・Familiar with Swift or Objective-C, iOS SDK, and iOS App development experience of more than a year",
            "・Familiar with the Xcode development environment",
            "・Have more than a year experience in Web services such as JSON and XML and serial Web API development",
            "・Have more than a year of experience in writing Foundation and Cocoa Touch Framework",
            "・Utilize Interface Builder for interface development and familiar with Autolayout mechanism",
            "・Familiar with the MVC architecture",
            "・Have experience with Git",
            ],
        },
        {
            "Category": "6",
            "Job": "Senior Android Developer",
            "WorkItem":[
            "・3+ years of Android Mobile App programming experience",
            "・Strong knowledge of JAVA, Android SDK and Android Studio",
            "・Implement effective Android mobile user interfaces",
            "・Understanding of data structures, design patterns and building reusable code",
            "・Experience with RESTful API and the process of deploying Android Apps",
            "・Familiarity with Git version control development process",
            "・Understanding MVP design patterns and adhere to Agile development principles",
            ],
        },
        {
            "Category": "6",
            "Job": "Senior iOS Developer",
            "WorkItem":[
            "・3+ years of iOS Mobile App programming experience",
            "・Strong Knowledge of Swift and iOS SDK",
            "・Familiarity auto-layout on storyboard and nib",
            "・Understanding of data structures, design patterns and building reusable code",
            "・Experience with RESTful API and the process of deploying iOS Apps",
            "・Familiarity with Git version control development process",
            "・Understanding of MVC design patterns",
            "・Strong knowledge of Objective-c is a plus",
            "・Understanding of MVVM design patterns is a plus",
            ],
        },
        {
            "Category": "8",
            "Job": "UX Researcher",
            "WorkItem":[
            "・Preparing, running and documenting workshops",
            "・Undertaking of User research and documenting analysis of findings",
            "・Creation and communication of User flows, Personas, Customer Journey maps, Information Architecture and Wireframes",
            "・Conducting UX reviews & validation on products during the course of Design and Development",
            "・Facilitate the conduction of User testing process",
            "・Ensuring on-time delivery of UX deliverables whilst not compromising quality standards",
            "・Make research findings convincing and actionable for both research experts and non-experts",
            "・Be a self-starter, adept at picking up new skills and technologies, and eager to break new ground",
            ],
        },
        {
            "Category": "8",
            "Job": "UX Designer",
            "WorkItem":[
            "・Conceive and conduct user research, interviews and surveys and translate them into user flows, customer journey maps, wireframes, mockups and prototypes",
            "・Design new ideas and solve problems related to property tech plus refine ideas that are sourced from within, anything from web applications to process changes",
            "・Contribute to the ongoing roadmap/pipelines and manage transitions to the project delivery team",
            "・Customer based problem solving including developing the hypothesis and test-and-learn opportunities",
            "・Design prototypes taking a user-centered approach and rapidly test and iterate designs",
            "・Dynamic and comfortable with delivering a wide variety of solutions across multiple business teams",
            "・High level of learning agility and initiative and ability to think independently without direct day-to-day supervision",
            "・A hands on, enthusiastic champion of change and innovation",
            "・Expertise in standard UX software e.g. Sketch, OmniGraffle, Axure, InVision, UXPin, Balsamiq, Framer etc is a must. Basic HTML5, CSS3, and JavaScript skills are a plus",
            ],
        },
        {
            "Category": "8",
            "Job": "UI/UX Designer",
            "WorkItem":[
            "・wireframe, prototyping tool experience",
            "・Sketch, illustrator, Photoshop ... experience",
            "・Experience in software interface and process development design",
            "・Web RWD screen design",
            "・Android / iOS interface design",
            "・Cut out plot concept",
            "・Experience in Web (HTML/CSS3) or MobileApp related program development",
            ],
        },
        {
            "Category": "7",
            "Job": "Operation Engineer",
            "WorkItem":[
            "・Monitor network/hardware/system/service, system troubleshooting, record incidents, track and report processing status",
            "・Server daemon(nginx,tomcat,webscoket) setup、operation、plan",
            "・Familiar with basic/package usage of ubuntu",
            "・Plan/implement/maintain/troubleshoot for Firewall(fortnite)、Switch(cisco)、Load Balance(F5)",
            "・Familiar with network architecture topology and troubleshooting",
            "・Should be able to handle network attacks (Ex.DDoS)",
            "・Coordinate with the development and operation team to perform system service adjustment, deployment and update operations",
            "・Familiar with network concepts or F5 SLB architecture & have experience in information security processing",
            "・On-call for all system issues",
            ],
        },
        {
            "Category": "7",
            "Job": "DevOps Engineer",
            "WorkItem":[
            "・Manage build/release of all stage/production environment",
            "・Improve the automated version control process",
            "・Continuous integration of CI/CD tools",
            "・Familiar with shell scripting, shell or automated deploy method",
            "・Automated deployment design",
            "・Familiar with the design and use of ansible or puppet",
            "・Familiar with aws or Alibaba Cloud",
            "・Familiar with the configuration of fastlane and drone",
            "・Familiar with the use and configuration of docker",
            ],
        },
        {
            "Category": "4",
            "Job": "PHP Developer",
            "WorkItem":[
            "・More than two years of web development experience",
            "・Have Linux operation ability",
            "・Familiar with MySQL and have database design capabilities",
            "・Familiar with HTML, CSS, Javascript",
            "・Familiar with network related protocols (TCP, HTTP, HTTPS) and experience in practical development",
            "・Experience with Drupal CMS development",
            "・Experience with PHP Laravel or Symfony2 development",
            ],
        },
        {
            "Category": "4",
            "Job": "React Frontend Developer",
            "WorkItem":[
            "・Define the front-end development framework along with the team",
            "・Develop React project",
            "・Co-work with back-end engineers to define API, and design front-end pages with UI",
            "・Familiar with Javascript, React.js, Html, Css",
            "・Familiar with ES6, Ajax, Restful API",
            "・Learn how to work with UI and back-end engineers",
            "・Familiar with GIT",
            "・Used the React Native development and know how to build into a native",
            "・Like sports events",
            "・Used GA to learn about Event Tracking",
            "・Used webpack, npm",
            "・Used the react router",
            ],
        },
        {
            "Category": "5",
            "Job": "Java Developer",
            "WorkItem":[
            "・A minimum 3 years software development experience",
            "・At least 2 years Java development experience",
            "・1+ years of experience in developing scalable applications using Microservices paradigm",
            "・Experience in Spring Boot is a plus",
            "・Worked in projects using REST API",
            "・Experience with Swagger, Junit",
            "・Experience / familiarity in Jenkins, Maven",
            "・Java/J2EE",
            "・Microservices",
            "・Rest API",
            ],
        },
        {
            "Category": "5",
            "Job": "Senior System Designer",
            "WorkItem":[
            "・5+ years Java transaction backend design",
            "・Micro Service (Spring Boot)",
            "・UML",
            "・Unit Test, Loading Testing",
            "・AWS",            
            ],
        },
        {
            "Category": "3",
            "Job": "QA Engineer",
            "WorkItem":[
            "・Planning test plans and test cases",
            "・Test and verify system functionality, compatibility, performance, pressure bearing, reliability, etc",
            "・Analyze test data, clarify issues, make recommendations for improvement, and write test reports",
            "・Maintain related test equipment",
            "・Function Test / Security test / User test (Usability test) / Software integration test/ Stress test",
            "・Test environment construction plan",
            "・Test plan and test report writing",
            "・Familiar with Postman, Fiddler, JMeter, Jira, Selenium",
            "・Familiar with Web, API, Mobile App and other related tests",            
            ],
        },
        {
            "Category": "2",
            "Job": "Senior Backend Engineer",
            "WorkItem":[
            "・Develop video streaming API",
            "・Building a websocket instant interaction API",
            "・Development Website API",
            "・2 years of experience in Web/API development",
            "・Familiar with Node.js : ES6, Express.js, Sequelize.js, promise, async/await",
            "・Familiar with Websocket, used framework such as Socket.io",
            "・Experience in MySQL and MongoDB database development",
            "・With HTTP / TCP / UDP network layer concept",
            "・Use Git version control and cache services such as Memcache, Redis",
            "・Have Vue or React any kind of framework development experience",
            "・Have CI / CD practical experience",
            "・Have RabbitMQ practical experience",
            ],
        },
        {
            "Category": "2",
            "Job": "Web Developer",
            "WorkItem":[
            "・Development website background",
            "・Development Website API",
            "・2 years of web and background development experience",
            "・Familiar with Node.js, PHP, Python",
            "・Experience in MySQL and MongoDB database development",
            "・Familiar with HTML / CSS / Javascript",
            "・Have any kind of framework development experience with Vue or React",
            "・Use Git version control",
            "・Used cache services such as Memcache, Redis",
            "・Have Vue or React any kind of framework development experience",
            "・Have CI / CD practical experience",
            "・PHP、Python、HTML、JavaScript",
            ],
        },
        {
            "Category": "2",
            "Job": "NLP Software Engineer",
            "WorkItem":[
            "・Establish word processing flow: word breaking, cleanup, synonym replacement, dictionary data creation and maintenance",
            "・NLP algorithm development: keyword extraction, scoring, file comparison, classification, user interest analysis",
            "・Python program experience",
            "・NLP and machine learning related frameworks and tools, such as numpy, scipy, opencc, jieba, Tensorflow, NLTK",
            "・Chinese NLP development experience: word embedding, document embedding, clustering, named-entity recognition, sequence-to-sequence model",
            "・Familiar with the Linux development environment",
            "・Familiar with sports events and news",
            ],
        },
        {
            "Category": "2",
            "Job": "Sport Marketing Specialist",
            "WorkItem":[
            "・Work with the development team to plan sports apps and sports sites, such as live streaming, sports forums, sports news",
            "・Plan and create sports related news topics",
            "・Regularly update live events, live news and forum discussions",
            "・Ability to independently plan an app or website",
            "・Love sports, knows about sports events and top leagues, such as baseball, basketball, soccer etc",
            "・Market & competitive product analysis report",
            "・Good communication with team members such as IT staff and editors",
            "・Familiar with current online sports websites or apps",
            "・Have UX experience",
            ],
        },
        {
            "Category": "5",
            "Job": "Field Application Engineer",
            "WorkItem":[
            "・Collaborate with Client team/RD team to service customers’ requirement",
            "・Write drivers in appropriate language that suits Client's needs",
            "・Troubleshooting analysis/Failure analysis/Making FAE report",
            "・Input the technical requirement into internal from Clients",
            "・Handle Client’s technical questions",
            "・Manage Client's expectations",
            "・ASP.NET or PHP or Python，SCRUM",
            ],
        },
    ];


    // 點選部門，出現職缺列
    function JobNameHTML(i, Array, departmentId) {


        $("#job" + departmentId).append(
            '<div class="col-md-3">' +
            '<a href="##" class="JobNameBtn">' +
            '<div class="jobitem">' +
            '<h3  class="JobName" id="' + Array[i].Category + '">' + Array[i].Job + '</h3>' +
            '</div>' +
            '</a>' +
            '</div>');

    }


    // 點選職缺，出現職缺的條件
    function jobContentHTML(i, Array, departmentId) {

        // 把所有職缺條件關閉
        $('.jobContentBox').css('display', 'none')


        // 條件以陣列方式呈現，跑for迴圈印出
        function WorkItem(Array,i){


            for (var a = 0; a < Array[i].WorkItem.length ; a++) {

                $("#JobItemArray").append('<p class="joblist">' + Array[i].WorkItem[a] + '</p>')            

            }


        }

        // 把職缺的條件印到HTML，只把列表單獨拉出
        $("#jobContent" + departmentId).append(
            '<div class="jobContentBox">' +
            '<h4 class="jobTitle">' + Array[i].Job + '</h4>' +
            '<div id="JobItemArray"></div>' +
            '<a class="jobSentBtn" id="Applicantapply">apply</a>' +
            '</div>');

        WorkItem(NowJobArray,i)

    }


    // 應徵者的填寫表格
    function ApplicantList(departmentId,Array,i) {


        $('.jobContentBox').remove()

        $("#jobContent" + departmentId).append(
            '<div class="jobContentBox">'+
            '<div class="ApplicantList">'+
            '<a id="ApplicantListBack"><img src="images/ApplicantListBack.svg" alt=""><p class="ApplicantListBackText">Back</p></a>'+
            '<div><h5>Apply Now</h5></div>'+
            '<div><h3 id="ThisArrayJob">'+Array[i].Job+'</h3></div>'+
            '<div>'+
            '<p>Full Name</p>'+
            '<input type="text">'+
            '</div>'+
            '<div>'+
            '<p>Mobile Number (+country code)</p>'+
            '<input type="text">'+
            '</div>'+
            '<div>'+
            '<p>Email Address</p>'+
            '<input type="text">'+
            '</div>'+
            '<div>'+
            '<div>'+
            '<p>OTHER (Linkedin profile / webpage etc)</p>'+
            '<input type="text">'+
            '</div>'+
            '<div>'+
            '<p>CV/Resume/Portfolio</p>'+
            '<label class="btn fileUpload">'+
            '<input type="file" style="display:none;">Upload File'+
            '</label>'+
            '</div>'+
            '<a href="mailto:hr@funpodium.net" class="ApplicantListBtn">Submit</a>'+
            '<p class="errorMessage">error</p>'+
            '</div>'+
            '</div>');


        $('.jobContentBox').css('display', 'block')

    }


    // 點選Apply按鈕
    $(document).on('click', '#Applicantapply', function() {

        var departmentId = ""
            departmentId = NowJobArray[0].Category

        // $("#jobContent" + departmentId).html('')
        // ApplicantList(departmentId)

        for (var i = 0; i < NowJobArray.length; i++) {

                
                if(NowJobArray[i].Job == $(this).siblings('.jobTitle').html()){
                    var N=i
                }

        }


        ApplicantList(departmentId,NowJobArray,N)


    })

    $(document).on('click', '#ApplicantListBack', function(){

        $('.jobContentBox').remove()

        for(var i = 0; i < NowJobArray.length; i++){

            var departmentId = NowJobArray[0].Category

            if(NowJobArray[i].Job == $(this).siblings('div').children('#ThisArrayJob').html()){

                    jobContentHTML(i, NowJobArray, departmentId)

                    $('.jobContentBox').css('display', 'block')

            }


        }

        // console.log($(this).siblings('div').children('#ThisArrayJob').html())


    })


    var NowJobArray = JobArrayEng


    // 點選部門按鈕
    $('.departmentBtn').click(function() {

        let departmentId = this.id.substr(7, 1)

        if ($('#job' + departmentId).children().html() == undefined) {


            // 讓所有職缺詳細消失
            $('.jobContentBox').css('display', 'none')


            NowJobArray = []

            // 抓現在的部門編號


            // push到新的陣列
            for (var i = 0; i < JobArrayEng.length; i++) {

                if (JobArrayEng[i].Category == departmentId) {

                    NowJobArray.push(JobArrayEng[i]);

                }

            }

            for (var i = 0; i < 9; i++) {

                // 讓所有職缺資料消失
                $("#job" + i).html('')
                // 清除職缺詳細的clearfix
                $('#jobContent' + i).removeClass('clearfix')
                // 清除職缺的clearfix
                $("#job" + i).removeClass('clearfix')
                // 將部門按鈕的狀態還原(點選前為6，點選後為12)
                // $("#job" + i).siblings('.departmentBox').removeClass('col-md-12').removeClass('col-md-6').addClass('col-md-6')

            }

            // 將目前點選的改為12
            // $(this).parent().parent().removeClass('col-md-6').addClass('col-md-12')


            // 印出這個部門的職缺
            for (var i = 0; i < NowJobArray.length; i++) {

                JobNameHTML(i, NowJobArray, departmentId);
            }

            // 在目前職缺加入clearfix
            $('#job' + departmentId).addClass('clearfix')

        } else {

            $('.col-md-3').remove()
            // $(this).parent().parent().removeClass('col-md-12').addClass('col-md-6')
            $('#job' + departmentId).removeClass('clearfix')
            $('#jobContent' + departmentId).css('display', 'none')

        }


    })




    // 點選職缺
    $(document).on('click', '.JobName', function() {


            $(".jobContentBox").remove()

        // 哪一個部門
        let departmentId = NowJobArray[0].Category
        // 點選的職缺名稱
        let JobName = this.textContent

        // 目前職缺的詳細加入clearfix
        $('#jobContent' + departmentId).addClass('clearfix')
        $('#jobContent' + departmentId).css('display', 'block')


        for (var i = 0; i < NowJobArray.length; i++) {

            // 抓目前點選陣列的職缺名稱
            let ArrayJobName = NowJobArray[i].Job

            // 如果與現在選的名稱相符，印出職缺詳細資料
            if (ArrayJobName == JobName) {

                jobContentHTML(i, NowJobArray, departmentId)

            $(".jobContentBox").slideDown("slow")


            }

        }


    })

})