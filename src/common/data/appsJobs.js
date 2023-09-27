import img2 from "../../assets/images/small/img-2.jpg";
import img4 from "../../assets/images/small/img-4.jpg";
import img7 from "../../assets/images/small/img-7.jpg";
import img3 from "../../assets/images/small/img-3.jpg";
import img8 from "../../assets/images/small/img-8.jpg";

import cimg1 from "../../assets/images/companies/img-1.png";
import cimg2 from "../../assets/images/companies/img-2.png";
import cimg3 from "../../assets/images/companies/img-3.png";
import cimg4 from "../../assets/images/companies/img-4.png";
import cimg5 from "../../assets/images/companies/img-5.png";
import cimg6 from "../../assets/images/companies/img-6.png";
import cimg7 from "../../assets/images/companies/img-7.png";
import cimg8 from "../../assets/images/companies/img-8.png";
import cimg9 from "../../assets/images/companies/img-9.png";

import Avatar1 from "../../assets/images/users/avatar-1.jpg";
import Avatar2 from "../../assets/images/users/avatar-2.jpg";
import Avatar4 from "../../assets/images/users/avatar-4.jpg";
import Avatar5 from "../../assets/images/users/avatar-5.jpg";
import Avatar6 from "../../assets/images/users/avatar-6.jpg";
import Avatar7 from "../../assets/images/users/avatar-7.jpg";
import Avatar8 from "../../assets/images/users/avatar-8.jpg";
import Avatar9 from "../../assets/images/users/avatar-9.jpg";
import Avatar10 from "../../assets/images/users/avatar-10.jpg";

import slack from "../../assets/images/brands/slack.png";
import mail_chimp from "../../assets/images/brands/mail_chimp.png";
import dropbox from "../../assets/images/brands/dropbox.png";
import bitBucket from "../../assets/images/brands/bitbucket.png";
import dribble from "../../assets/images/brands/dribbble.png";

const jobWidgets = [
    {
        id: 1,
        lable: "Application",
        icon: "ri-arrow-up-line ",
        badgeColor: "success",
        chartColor: '["--vz-success" , "--vz-transparent"]',
        number: "16.24 %",
        series: [
            {
                name: "Results",
                data: [0, 110, 95, 75, 120],
            },
        ],
    },
    {
        id: 2,
        lable: "Interviewed",
        icon: "ri-arrow-up-line ",
        badgeColor: "success",
        chartColor: '["--vz-success" , "--vz-transparent"]',
        number: "34.24 %",
        series: [
            {
                name: "Results",
                data: [0, 68, 35, 90, 99],
            },
        ],
    },
    {
        id: 3,
        lable: "Hired",
        icon: "ri-arrow-up-line ",
        badgeColor: "success",
        chartColor: '["--vz-success" , "--vz-transparent"]',
        number: "6.67 %",
        series: [
            {
                name: "Results",
                data: [0, 36, 110, 95, 130],
            },
        ],
    },
    {
        id: 4,
        lable: "Rejected",
        icon: "ri-arrow-down-line ",
        badgeColor: "danger",
        chartColor: '["--vz-danger" , "--vz-transparent"]',
        number: "3.24 %",
        series: [
            {
                name: "Results",
                data: [0, 98, 85, 90, 67],
            },
        ],
    },
];

const jobList = [
    {
        id: 1,
        coverImg: img2,
        companyLogo: cimg3,
        jobTitle: "UI/UX designer",
        companyName: "Nesta Technologies",
        description:
            "A UI/UX designer's job is to create user-friendly interfaces that enable users to understand how to use complex technical products. If you're passionate about the latest technology trends and devices, you'll find great fulfillment in being involved in the design process for the next hot gadget.",
        tags: ["Design", "Remote", "UI/UX Designer", "Designer"],
        type: "Full Time",
        experience: "2 Year",
        location: "Escondido, California",
        applied: "640 Applied",
        postDate: "11 Sep, 2022",
    },
    {
        id: 2,
        coverImg: { img4 },
        companyLogo: cimg4,
        jobTitle: "Marketing Director",
        companyName: "Meta4Systems",
        description:
            "These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents to do what we like best, every pleasure is to be welcomed and every pain avoided. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure.",
        tags: ["Design", "Remote", "UI/UX Designer", "Designer"],
        type: "Internship",
        experience: "Fresher",
        location: "Vinninga, Sweden",
        applied: "134 Applied",
        postDate: "13 Sep, 2022",
    },
    {
        id: 3,
        coverImg: { img7 },
        companyLogo: cimg5,
        jobTitle: "Product Sales Specialist",
        companyName: "Digitech Galaxy",
        description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
        tags: ["Design", "Remote", "UI/UX Designer", "Designer"],
        type: "Part Time",
        experience: "0 - 5 Year",
        location: "Cullera, Spain",
        applied: "79 Applied",
        postDate: "14 Sep, 2022",
    },
    {
        id: 4,
        coverImg: { img3 },
        companyLogo: cimg6,
        jobTitle: "Project Manager",
        companyName: "Syntyce Solutions",
        description:
            "In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated.",
        tags: ["Design", "Remote", "UI/UX Designer", "Designer"],
        type: "Freelance",
        experience: "1 Year",
        location: "Stordorf, Germany",
        applied: "36 Applied",
        postDate: "14 Sep, 2022",
    },
    {
        id: 5,
        coverImg: { img8 },
        companyLogo: cimg7,
        jobTitle: "Product Designer",
        companyName: "Themesbrand",
        description:
            "A UI/UX designer's job is to create user-friendly interfaces that enable users to understand how to use complex technical products. If you're passionate about the latest technology trends and devices, you'll find great fulfillment in being involved in the design process for the next hot gadget.",
        tags: ["Design", "Remote", "UI/UX Designer", "Designer"],
        type: "Full Time",
        experience: "1 - 2 Year",
        location: "United Kingdom",
        applied: "74 Applied",
        postDate: "15 Sep, 2022",
    },
];

const jobGrid = [
    {
        id: 1,
        companyLogo: cimg1,
        jobTitle: "Education Training",
        companyName: "Micro Design",
        location: "Escondido,California",
        postDate: "15 Sep, 2022",
        description:
            "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent.",
        requirement: ["Full Time", "Freelance", " Urgent"],
        status: "Active",
    },
    {
        id: 2,
        companyLogo: cimg2,
        jobTitle: "Magento Developer",
        companyName: "Themesbrand",
        location: "Stordorf, Germany",
        postDate: "15 Sep, 2022",
        description:
            "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent.",
        requirement: ["Part Time", "Freelance"],
        status: "New",
    },
    {
        id: 3,
        companyLogo: cimg3,
        jobTitle: "Product Designer",
        companyName: "Themesbrand",
        location: "Cullera, Spain",
        postDate: "14 Sep, 2022",
        description:
            "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent.",
        requirement: ["Full Time", " Private"],
        status: "Active",
    },
    {
        id: 4,
        companyLogo: cimg4,
        jobTitle: "React Developer",
        companyName: "iTest Factory",
        location: "Haren, Germany",
        postDate: "13 Sep, 2022",
        description:
            "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent.",
        requirement: ["Full Time", "Freelance", " Urgent"],
        status: "New",
    },
    {
        id: 5,
        companyLogo: cimg5,
        jobTitle: "UI/UX Designer",
        companyName: "Creative Team",
        location: "Vinninga, Sweden",
        postDate: "13 Sep, 2022",
        description:
            "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent.",
        requirement: ["Part Time"],
        status: "Active",
    },
    {
        id: 6,
        companyLogo: cimg6,
        jobTitle: "Marketing Director",
        companyName: "Themesbrand",
        location: "Zhoukou, China",
        postDate: "12 Sep, 2022",
        description:
            "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent.",
        requirement: ["Freelance", " Urgent"],
        status: "Close",
    },
    {
        id: 7,
        companyLogo: cimg7,
        jobTitle: "Full Stack Engineer",
        companyName: "Syntyce Solutions",
        location: "Boroaia, Romania",
        postDate: "11 Sep, 2022",
        description:
            "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent.",
        requirement: ["Full Time"],
        status: "Active",
    },
    {
        id: 8,
        companyLogo: cimg8,
        jobTitle: "Project Manager",
        companyName: "Themesbrand",
        location: "Pazmand, Hungary",
        postDate: "11 Sep, 2022",
        description:
            "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent.",
        requirement: ["Full Time", "Freelance"],
        status: "New",
    },
    {
        id: 9,
        companyLogo: cimg1,
        jobTitle: "HTML Developer",
        companyName: "Themesbrand",
        location: "Donsieders, Germany",
        postDate: "10 Sep, 2022",
        description:
            "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent.",
        requirement: ["Part Time", "Freelance"],
        status: "Active",
    },
    {
        id: 10,
        companyLogo: cimg4,
        jobTitle: "Business Associate",
        companyName: "Themesbrand",
        location: "Sermerieu, France",
        postDate: "09 Sep, 2022",
        description:
            "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent.",
        requirement: ["Full Time", "Freelance", " Urgent"],
        status: "Active",
    },
    {
        id: 11,
        companyLogo: cimg2,
        jobTitle: "Assistant / Store Keeper",
        companyName: "Force Medicines",
        location: "San Lorenzo, Philippines",
        postDate: "08 Sep, 2022",
        description:
            "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent.",
        requirement: ["Part Time"],
        status: "Active",
    },
    {
        id: 12,
        companyLogo: cimg8,
        jobTitle: "Product Sales Specialist",
        companyName: "Themesbrand",
        location: "Pazmand, Hungary",
        postDate: "08 Sep, 2022",
        description:
            "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent.",
        requirement: ["Full Time", " Private"],
        status: "New",
    },
];

const overviewJobs = [
    {
        id: 1,
        isActive: false,
        companyLogo: cimg1,
        jobTitle: "Web designer",
        companyName: "Micro Design",
        location: "Escondido,California",
        time: "3 min ago",
        postDate: "15 Sep, 2022",
        description:
            "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent.",
        requirement: ["Full Time", "Freelance", "Urgent"],
        s1: "Full Time",
        s2: "Freelance",
        s3: "Urgent",
        status: "Active",
    },
    {
        id: 2,
        isActive: false,
        companyLogo: cimg2,
        jobTitle: "Product Sale Specialist",
        companyName: "Themesbrand",
        location: "Stordorf, Germany",
        time: "10 min ago",
        postDate: "15 Sep, 2022",
        description:
            "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent.",
        requirement: ["Part Time", "Freelance"],
        s1: "Part Time",
        s2: "Freelance",
        status: "New",
    },
    {
        id: 3,
        isActive: false,
        companyLogo: cimg3,
        jobTitle: "Product Designer",
        companyName: "Themesbrand",
        location: "Cullera, Spain",
        time: "30 min ago",
        postDate: "14 Sep, 2022",
        description:
            "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent.",
        requirement: ["Full Time", "Private"],
        s1: "Full Time",
        s2: "Private",
        status: "Active",
    },
    {
        id: 4,
        isActive: false,
        companyLogo: cimg4,
        jobTitle: "React Developer",
        companyName: "iTest Factory",
        location: "Haren, Germany",
        time: "1 day ago",
        postDate: "13 Sep, 2022",
        description:
            "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent.",
        requirement: ["Full Time", "Freelance", "Urgent"],
        s1: "Full Time",
        s2: "Freelance",
        s3: "Urgent",
        status: "New",
    },
    {
        id: 5,
        isActive: false,
        companyLogo: cimg5,
        jobTitle: "Product Sale Specialist",
        companyName: "Creative Team",
        location: "Vinninga, Sweden",
        time: "2 day ago",
        postDate: "13 Sep, 2022",
        description:
            "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent.",
        requirement: ["Part Time"],
        s1: "Part Time",

        status: "Active",
    },
    {
        id: 6,
        isActive: false,
        companyLogo: cimg6,
        jobTitle: "Marketing Director",
        companyName: "Themesbrand",
        location: "Zhoukou, China",
        time: "3 day ago",
        postDate: "12 Sep, 2022",
        description:
            "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent.",
        requirement: ["Freelance", "Urgent"],
        s1: "Freelance",
        s2: "Urgent",
        status: "Close",
    },
];

const jobCandidates = [
    {
        id: 1,
        userImg: Avatar10,
        candidateName: "Tonya Noble",
        designation: "Web Designer",
        location: "Cullera, Spain",
        type: "Part Time",
        rating: ["4.2", "2.2k Ratings"],
        bookmark: true,
    },
    {
        id: 2,
        userImg: Avatar1,
        candidateName: "Nicholas Ball",
        designation: "Assistant / Store Keeper",
        location: "San Lorenzo",
        type: "Full Time",
        rating: ["4.1", "1.72k Ratings"],
        bookmark: true,
    },
    {
        id: 3,

        nickname: "ZM",
        candidateName: "Zynthia Marrow",
        designation: "Assistant / Store Keeper",
        location: "Cullera, Spain",
        type: "Freelancer",
        rating: ["4.0", "42.5k Ratings"],
        bookmark: false,
    },
    {
        id: 4,
        userImg: Avatar2,
        candidateName: "Philippa Santiago",
        designation: "Project Manager ",
        location: "Ugashik, US",
        type: "Part Time",
        rating: ["4.3", "15k Ratings"],
        bookmark: true,
    },
    {
        id: 5,
        userImg: Avatar4,
        candidateName: "Elizabeth Allen",
        designation: "Education Training ",
        location: "Zuweihir, UAE",
        type: "Freelancer",
        rating: ["3.5", "7.3k Ratings"],
        bookmark: false,
    },
    {
        id: 6,
        userImg: Avatar5,
        candidateName: "Cassian Jenning",
        designation: "Graphic Designer ",
        location: "Limestone, US",
        type: "Part Time",
        rating: ["4.3", "13.2k Ratings"],
        bookmark: false,
    },
    {
        id: 7,
        userImg: Avatar6,
        candidateName: "Scott Holt",
        designation: "UI/UX Designer ",
        location: "Germany",
        type: "Part Time",
        rating: ["3.5", "7.3k Ratings"],
        bookmark: false,
    },
    {
        id: 8,

        nickname: "PS",
        candidateName: "Philbert Schwartz",
        designation: "React Developer ",
        location: "Zuweihir, UAE",
        type: "Full Time",
        rating: ["4.1", "1.74k Ratings"],
        bookmark: true,
    },
    {
        id: 9,

        nickname: "LV",
        candidateName: "Larry Villa",
        designation: "Assistant / Store Keeper",
        location: "San Lorenzo",
        type: "Full Time",
        rating: ["4.0", "1.72k Ratings"],
        bookmark: false,
    },
    {
        id: 10,
        userImg: Avatar10,
        candidateName: "Harley Watkins",
        designation: "Project Manager ",
        location: "Texanna, US",
        type: "Full Time",
        rating: ["4.2", "3.21k Ratings"],
        bookmark: false,
    },
    {
        id: 11,
        userImg: Avatar2,
        candidateName: "Marie Stewart",
        designation: "Web Designer",
        location: "Cullera, Spain",
        type: "Part Time",
        rating: ["4.2", "2.2k Ratings"],
        bookmark: true,
    },
    {
        id: 12,
        userImg: Avatar9,
        candidateName: "Hadley Leonard",
        designation: "Executive, HR Operations ",
        location: "Zuweihir, UAE",
        type: "Full Time",
        rating: ["4.0", "3.2k Ratings"],
        bookmark: false,
    },
    {
        id: 13,
        userImg: Avatar6,
        candidateName: "Zoderick Rodriquez",
        designation: "Full Stack Developer",
        location: "Muhtarqah, UAE",
        type: "Freelancer",
        rating: ["3.9", "98.65k Ratings"],
        bookmark: false,
    },
    {
        id: 14,
        userImg: Avatar7,
        candidateName: "Nadia Harding",
        designation: "Web Designer",
        location: "Pahoa, US",
        type: "Freelancer",
        rating: ["4.3", "2.93k Ratings"],
        bookmark: true,
    },
    {
        id: 15,
        userImg: Avatar4,
        candidateName: "Addison Black",
        designation: "UI/UX Designer",
        location: "Phoenix, Arizona",
        type: "Part Time",
        rating: ["3.8", "10.32k Ratings"],
        bookmark: false,
    },
    {
        id: 16,

        nickname: "JW",
        candidateName: "Jems Wise",
        designation: "Executive, HR Operations",
        location: "Ghurayfah, UAE",
        type: "Full Time",
        rating: ["4.0", "7.63k Ratings"],
        bookmark: false,
    },
    {
        id: 17,
        userImg: Avatar8,
        candidateName: "Lizzie Chandler",
        designation: "React Developer",
        location: "Maidaq, UAE",
        type: "Part Time",
        rating: ["3.9", "1.35k Ratings"],
        bookmark: false,
    },
    {
        id: 18,
        nickname: "JW",
        candidateName: "Jenson Watson",
        designation: "Graphic Designer",
        location: "Quesada, US",
        type: "Freelancer",
        rating: ["4.2", "3.16k Ratings"],
        bookmark: false,
    },
    {
        id: 19,
        userImg: Avatar1,
        candidateName: "Jaylee Ward",
        designation: "Education Training",
        location: "Cullera, Spain",
        type: "Full Time",
        rating: ["4.0", "3.21k Ratings"],
        bookmark: true,
    },
    {
        id: 20,
        userImg: Avatar2,
        candidateName: "Trista Guerrero",
        designation: "Product Director",
        location: "Jereirah, UAE",
        type: "Full Time",
        rating: ["4.1", "4.31k Ratings"],
        bookmark: false,
    },
    {
        id: 21,

        nickname: "JM",
        candidateName: "James Mike",
        designation: "Graphic Designer",
        location: "Quesada, US",
        type: "Freelancer",
        rating: ["4.2", "3.16k Ratings"],
        bookmark: false,
    },
    {
        id: 22,

        nickname: "MJ",
        candidateName: "Mike Jems",
        designation: "Product Director",
        location: "Jereirah, UAE",
        type: "Full Time",
        rating: ["4.1", "4.31k Ratings"],
        bookmark: false,
    },
    {
        id: 23,
        userImg: Avatar4,
        candidateName: "Mary Sak",
        designation: "Education Training",
        location: "Cullera, Spain",
        type: "Full Time",
        rating: ["4.0", "3.21k Ratings"],
        bookmark: true,
    },
    {
        id: 24,
        userImg: Avatar8,
        candidateName: "Roderick Jones",
        designation: "React Developer",
        location: "Maidaq, UAE",
        type: "Part Time",
        rating: ["3.9", "1.35k Ratings"],
        bookmark: false,
    },
];

const jobCategories = [
    {
        id: 1,
        icon: "https://cdn.lordicon.com/xulniijg.json",
        lable: " Business Development",
        position: "26 Position",
    },
    {
        id: 2,
        icon: "https://cdn.lordicon.com/oclwxpmm.json",
        lable: " Automotive Jobs",
        position: "346 Position",
    },
    {
        id: 3,
        icon: "https://cdn.lordicon.com/dklbhvrt.json",
        lable: "Construction / Facilities",
        position: "126 Position",
    },
    {
        id: 4,
        icon: "https://cdn.lordicon.com/adwosptt.json",
        lable: "Design, Art & Multimedia",
        position: "234 Position",
    },
    {
        id: 5,
        icon: "https://cdn.lordicon.com/kkcllwsu.json",
        lable: "Healthcare",
        position: "746 Position",
    },
    {
        id: 6,
        icon: "https://cdn.lordicon.com/rahcoaeu.json",
        lable: "Sale & Marketing",
        position: "124 Position",
    },
    {
        id: 7,
        icon: "https://cdn.lordicon.com/smauprql.json",
        lable: "Accounting / Finance",
        position: "234 Position",
    },
    {
        id: 8,
        icon: "https://cdn.lordicon.com/itykargr.json",
        lable: "Project Management",
        position: "34 Position",
    },
    {
        id: 9,
        icon: "https://cdn.lordicon.com/cnyeuzxc.json",
        lable: "Costomer Services",
        position: "54 Position",
    },
    {
        id: 10,
        icon: "https://cdn.lordicon.com/sygggnra.json",
        lable: "Content Writer",
        position: "345 Position",
    },
    {
        id: 11,
        icon: "https://cdn.lordicon.com/hfmdczge.json",
        lable: "Goverment Jobs",
        position: "634 Position",
    },
    {
        id: 12,
        icon: "https://cdn.lordicon.com/xhebrhsj.json",
        lable: "Digital Marketing",
        position: "632 Position",
    },
    {
        id: 13,
        icon: "https://cdn.lordicon.com/ucvsemjq.json",
        lable: "Education & Training",
        position: "235 Position",
    },
    {
        id: 14,
        icon: "https://cdn.lordicon.com/pvbjsfif.json",
        lable: "IT & Software",
        position: "239 Position",
    },
    {
        id: 15,
        icon: "https://cdn.lordicon.com/auvicynv.json",
        lable: "Catering & Tourism",
        position: "765 Position",
    },
];
const jobApplication = [
    {
        id: 1,
        appid: "#VZ002",
        company: [slack, "Plunkett Infotech"],
        designation: "Product Designer",
        date: "26 Sep, 2022",
        contacts: "734-544-2407",
        type: "Full Time",
        status: "New",
    },
    {
        id: 2,
        appid: "#VZ003",
        company: [cimg4, "Martin's"],
        designation: "Business Associate",
        date: "26 Sep, 2022",
        contacts: "303-606-1985",
        type: "Part Time",
        status: "New",
    },
    {
        id: 3,
        appid: "#VZ004",
        company: [cimg3, "Meta4Systems"],
        designation: "Magento Developer",
        date: "27 Sep, 2022",
        contacts: "610-440-0592",
        type: "Part Time",
        status: "Rejected",
    },
    {
        id: 4,
        appid: "#VZ005",
        company: [cimg4, "Grey Fade"],
        designation: "Marketing Director",
        date: "28 Sep, 2022",
        contacts: "907-452-3702",
        type: "Full Time",
        status: "Pending",
    },
    {
        id: 5,
        appid: "#VZ006",
        company: [mail_chimp, "Syntyce Solutions "],
        designation: "Project Manager",
        date: "28 Sep, 2022",
        contacts: "803-740-3309",
        type: "Part Time",
        status: "Approved",
    },
    {
        id: 6,
        appid: "#VZ007",
        company: [dropbox, "Micro Design"],
        designation: "HTML Developer",
        date: "29 Sep, 2022",
        contacts: "563-940-8926",
        type: "Part Time",
        status: "New",
    },
    {
        id: 7,
        appid: "#VZ008",
        company: [cimg6, "Android Galaxy"],
        designation: "Product Sales Specialist",
        date: "29 Sep, 2022",
        contacts: "352-403-5870",
        type: "Full Time",
        status: "Pending",
    },
    {
        id: 8,
        appid: "#VZ009",
        company: [cimg1, "Digitech Galaxy"],
        designation: "Magento Developer",
        date: "29 Sep, 2022",
        contacts: "517-745-4446",
        type: "Part Time",
        status: "New",
    },
    {
        id: 9,
        appid: "#VZ010",
        company: [bitBucket, "iTest Factory"],
        designation: "Business Associate",
        date: "30 Sep, 2022",
        contacts: "814-434-0128",
        type: "Part Time",
        status: "Approved",
    },
    {
        id: 10,
        appid: "#VZ011",
        company: [dribble, "Nesta Technologies"],
        designation: "UI/UX Designer",
        date: "01 Sep, 2022",
        contacts: "304-338-0822",
        type: "Part Time",
        status: "Pending",
    },
    {
        id: 11,
        appid: "#VZ012",
        company: [cimg4, "Digitech Galaxy"],
        designation: "Product Designer",
        date: "02 Sep, 2022",
        contacts: "320-336-1796",
        type: "Full Time",
        status: "New",
    },
    {
        id: 12,
        appid: "#VZ012",
        company: [slack, "Syntyce Solutions"],
        designation: "Web Designer",
        date: "02 Sep, 2022",
        contacts: "785-685-4616",
        type: "Full Time",
        status: "Rejected",
    },
];
const jobCompanies = [
    {
        id: "1",
        image_src: cimg3,
        lable: "Martin's Solutions",
        industry_type: "IT Department",
        vacancy: "97",
        company_info:
            "The IT department of a company ensures that the network of computers within the organization are well-connected and functioning properly. All the other departments within the company rely on them to ensure that their respective functions can go on seamlessly.",
        location: "Cullera, Spain",
        employee: "250-300",
        rating: "4.8",
        website: "www.martinsolution.com",
        email: "info@martinsolution.com",
        since: "1995",
    },
    {
        id: "2",
        image_src: cimg4,
        lable: "Syntyce Solutions",
        industry_type: "Health Services",
        vacancy: "31",
        company_info:
            "These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents to do what we like best, every pleasure is to be welcomed and every pain avoided, because it is pleasure.",
        location: "San Lorenzo",
        employee: "400-450",
        rating: "4.4",
        website: "www.syntycesolution.com",
        email: "info@syntycesolution.com",
        since: "2001",
    },
    {
        id: "3",
        image_src: cimg1,
        lable: "Moetic Fashion",
        industry_type: "Textiles: Clothing, Footwear",
        vacancy: "641",
        company_info:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim quia voluptas sit.",
        location: "Cullera, Spain",
        employee: "900-950",
        rating: "4.2",
        website: "-",
        email: "email@moeticfashion.com",
        since: "2000",
    },
    {
        id: "4",
        image_src: cimg5,
        lable: "Meta4Systems",
        industry_type: "Computer Industry",
        vacancy: "322",
        company_info:
            "In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur.",
        location: "Ugashik, US",
        employee: "10-50",
        rating: "4.5",
        website: "www.meta4systems.com",
        email: "support@meta4systems.com",
        since: "2019",
    },
    {
        id: "5",
        image_src: cimg1,
        lable: "Kent's",
        industry_type: "IT Department",
        vacancy: "10",
        company_info:
            "A UI/UX designer's job is to create user-friendly interfaces that enable users to understand how to use complex technical. If you're passionate, you'll find great fulfillment in being involved in the design process for the next hot gadget.",
        location: "Zuweihir, UAE",
        employee: "10-50",
        rating: "4.1",
        website: "-",
        email: "-",
        since: "2018",
    },
    {
        id: "6",
        image_src: cimg7,
        lable: "Micro Design",
        industry_type: "Financial Services",
        vacancy: "140",
        company_info:
            "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent.If several languages coalesce, the grammar of the resulting If several languages coalesce, the grammar of the resulting.",
        location: "Limestone, US",
        employee: "300-350",
        rating: "4.5",
        website: "www.microdesign.com",
        email: "info@microdesign.com",
        since: "2016",
    },
    {
        id: "7",
        image_src: cimg6,
        lable: "Zoetic Fashion",
        industry_type: "Textiles: Clothing, Footwear",
        vacancy: "21",
        company_info:
            "To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages existing.",
        location: "Germany",
        employee: "10-50",
        rating: "3.9",
        website: "-",
        email: "info@zoeticfashion.com",
        since: "2018",
    },
    {
        id: "8",
        image_src: cimg8,
        lable: "Digitech Galaxy",
        industry_type: "Telecommunications Services",
        vacancy: "154",
        company_info:
            "The IT department of a company ensures that the network of computers within the organization are well-connected and functioning properly. All the other departments within the company rely on them to ensure that their respective functions can go on seamlessly.",
        location: "Zuweihir, UAE",
        employee: "400-415",
        rating: "4.0",
        website: "-",
        email: "-",
        since: "2014",
    },
    {
        id: "9",
        image_src: cimg9,
        lable: "Erlebacher's",
        industry_type: "Health Services",
        vacancy: "134",
        company_info:
            "Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable.",
        location: "San Lorenzo",
        employee: "350-400",
        rating: "4.4",
        website: "-",
        email: "info@erlebacher.com",
        since: "2016",
    },
    {
        id: "10",
        image_src: cimg5,
        lable: "iTest Factory",
        industry_type: "Chemical Industries",
        vacancy: "126",
        company_info:
            "The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental.",
        location: "Texanna, US",
        employee: "250-300",
        rating: "4.5",
        website: "-",
        email: "info@itest.com",
        since: "2016",
    },
    {
        id: "11",
        image_src: cimg7,
        lable: "Zoetic Fashion",
        industry_type: "Textiles: Clothing, Footwear",
        vacancy: "47",
        company_info:
            "The IT department of a company ensures that the network of computers within the organization are well-connected and functioning properly. All the other departments within the company rely on them to ensure that their respective functions can go on seamlessly.",
        location: "Cullera, Spain",
        employee: "120-150",
        rating: "4.7",
        website: "www.zoeticfashion.com",
        email: "info@zoeticfashion.com",
        since: "2015",
    },
    {
        id: "12",
        image_src: cimg3,
        lable: "Micro Design",
        industry_type: "IT Department",
        vacancy: "23",
        company_info:
            "Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce of the resulting.",
        location: "Zuweihir, UAE",
        employee: "80-100",
        rating: "4.6",
        website: "www.microdesign.com",
        email: "info@microdesign.com",
        since: "2014",
    },
    {
        id: "13",
        image_src: cimg4,
        lable: "Syntyce Solutions",
        industry_type: "Computer Industry",
        vacancy: "11",
        company_info:
            "The IT department of a company ensures that the network of computers within the organization are well-connected and functioning properly. All the other departments within the company rely on them to ensure that their respective functions can go on seamlessly.",
        location: "Muhtarqah, UAE",
        employee: "50-70",
        rating: "4.2",
        website: "www.syntycesolutions.com",
        email: "support@syntycesolutions.com",
        since: "2016",
    },
    {
        id: "14",
        image_src: cimg1,
        lable: "Asiatic Solutions",
        industry_type: "Health Services",
        vacancy: "9",
        company_info:
            "To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is new common language will be more simple and regular than the existing European languages.",
        location: "Pahoa, US",
        employee: "30-50",
        rating: "3.8",
        website: "www.asiaticsolution.com",
        email: "info@asiaticsolution.com",
        since: "2019",
    },
    {
        id: "15",
        image_src: cimg1,
        lable: "Great Clothes",
        industry_type: "Textiles: Clothing, Footwear",
        vacancy: "60",
        company_info:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit.",
        location: "Phoenix, Arizona",
        employee: "120-150",
        rating: "4.0",
        website: "-",
        email: "-",
        since: "2017",
    },
    {
        id: "16",
        image_src: cimg5,
        lable: "Kent's Solutions",
        industry_type: "IT Department",
        vacancy: "26",
        company_info:
            "It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the lable of Lorem Ipsum.",
        location: "Ghurayfah, UAE",
        employee: "50-80",
        rating: "4.2",
        website: "www.kentssolution.com",
        email: "info@kentssolution.com",
        since: "2018",
    },
    {
        id: "17",
        image_src: cimg4,
        lable: "Syntyce Solutions",
        industry_type: "Computer Industry",
        vacancy: "11",
        company_info:
            "The IT department of a company ensures that the network of computers within the organization are well-connected and functioning properly. All the other departments within the company rely on them to ensure that their respective functions can go on seamlessly.",
        location: "Maidaq, UAE",
        employee: "50-70",
        rating: "4.2",
        website: "www.syntycesolutions.com",
        email: "support@syntycesolutions.com",
        since: "2016",
    },
    {
        id: "18",
        image_src: cimg4,
        lable: "Syntyce Solutions",
        industry_type: "Health Services",
        vacancy: "31",
        company_info:
            "These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents to do what we like best, every pleasure is to be welcomed and every pain avoided, because it is pleasure.",
        location: "Quesada, US",
        employee: "400-450",
        rating: "4.4",
        website: "www.syntycesolution.com",
        email: "info@syntycesolution.com",
        since: "2001",
    },
    {
        id: "19",
        image_src: cimg5,
        lable: "iTest Factory",
        industry_type: "Chemical Industries",
        vacancy: "126",
        company_info:
            "The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental.",
        location: "Cullera, Spain",
        employee: "250-300",
        rating: "4.5",
        website: "-",
        email: "info@itest.com",
        since: "2016",
    },
    {
        id: "20",
        image_src: cimg6,
        lable: "Zoetic Fashion",
        industry_type: "Textiles: Clothing, Footwear",
        vacancy: "21",
        company_info:
            "To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages existing.",
        location: "Jereirah, UAE",
        employee: "10-50",
        rating: "3.9",
        website: "-",
        email: "info@zoeticfashion.com",
        since: "2018",
    },
];
export {
    jobWidgets,
    jobList,
    jobGrid,
    overviewJobs,
    jobCandidates,
    jobCategories,
    jobApplication,
    jobCompanies,
};