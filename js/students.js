/**
 * ============================================================================
 * CLASS M5 - STUDENT DATA & TEAM ASSIGNMENTS (54 STUDENTS)
 * ============================================================================
 * HOW TO EDIT THIS FILE:
 * 1. Replace "Student" and "One" (etc.) with each student's real First & Last Name.
 *    (Supports both English and Khmer Unicode text, e.g., "សុខ", "ដារ៉ា")
 * 2. Update gender to "Male" or "Female".
 * 3. Update the team name for each of the 6 subjects (ADS, DC, DB, CA, JAVA, ENGLISH).
 *    Example: "Team 1", "Team 2", "Team 3", "Team 4", "Team 5", "Team 6", etc.
 * 4. Keep the commas (,) between each student object and quotes ("") around text.
 * ============================================================================
 */

const SUBJECT_INFO = [
    { code: "ADS", fullName: "Algorithms & Data Structures", icon: "fa-solid fa-diagram-project" },
    { code: "DC", fullName: "Essential Data Communications", icon: "fa-solid fa-network-wired" },
    { code: "DB", fullName: "Database Design Systems", icon: "fa-solid fa-database" },
    { code: "CA", fullName: "Computer Architecture", icon: "fa-solid fa-microchip" },
    { code: "JAVA", fullName: "Java Programming", icon: "fa-brands fa-java" },
    { code: "ENGLISH", fullName: "Academic English ", icon: "fa-solid fa-language" }
];

const students = [
    // --- STUDENT 1 ---
    {
        id: 42,
        firstName: "សំរ៉េច",
        lastName: "វិសាល",
        gender: "Male",
        teams: { ADS: "Team 9" }
    },
    // --- STUDENT 2 ---
    {
        id: 50,
        firstName: "ឡេវ",
        lastName: "គីមអេង",
        gender: "Female",
        teams: { ADS: "Team 9"}
    },
    // --- STUDENT 3 ---
    {
        id: 3,
        firstName: "ផាន់",
        lastName: "ម៉េង",
        gender: "Male",
        teams: { ADS: "Team 9" }
    },
    // --- STUDENT 4 ---
    {
        id: 4,
        firstName: "អ៊ុយ",
        lastName: "គឹមហៀង",
        gender: "Female",
        teams: { ADS: "Team 9" }
    },
    // --- STUDENT 5 ---
    {
        id: 5,
        firstName: "អ៊ាង",
        lastName: "ស្រី​ដាវ",
        gender: "Female",
        teams: { ADS: "Team 9"}
    },
    // --- STUDENT 6 ---
    {
        id: 6,
        firstName: "សឿត",
        lastName: "ភក្តី",
        gender: "Male",
        teams: { ADS: "Team 1"}
    },
    // --- STUDENT 7 ---
    {
        id: 7,
        firstName: "ផល",
        lastName: "ភា",
        gender: "Male",
        teams: { ADS: "Team 1"}
    },
    // --- STUDENT 8 ---
    {
        id: 8,
        firstName: "ផាត",
        lastName: "តាំងម៉េង",
        gender: "Male",
        teams: { ADS: "Team 1"}
    },
    // --- STUDENT 9 ---
    {
        id: 9,
        firstName: "ប៉េត",
        lastName: "មិថុនា",
        gender: "Male",
        teams: { ADS: "Team 1"}
    },
    // --- STUDENT 10 ---
    {
        id: 10,
        firstName: "ប៉ាក់",
        lastName: "សុវណ្ណបញ្ញា",
        gender: "Male",
        teams: { ADS: "Team 1" }
    },
    // --- STUDENT 11 ---
    {
        id: 11,
        firstName: "ឌី",
        lastName: "ផានិត",
        gender: "Male",
        teams: { ADS: "Team 2"}
    },
    // --- STUDENT 12 ---
    {
        id: 12,
        firstName: "ប៊ុនសេង",
        lastName: "ម៉េងហ័ង",
        gender: "Male",
        teams: { ADS: "Team 2"}
    },
    // --- STUDENT 13 ---
    {
        id: 13,
        firstName: "ពុទ",
        lastName: "សៅលី",
        gender: "Male",
        teams: { ADS: "Team 2"}
    },
    // --- STUDENT 14 ---
    {
        id: 14,
        firstName: "ប៊ន",
        lastName: "បៀងស្រីនាង",
        gender: "Female",
        teams: { ADS: "Team 2"}
    },
    // --- STUDENT 15 ---
    {
        id: 15,
        firstName: "លីម",
        lastName: "សុខឡេង",
        gender: "Female",
        teams: { ADS: "Team 2" }
    },
    // --- STUDENT 16 ---
    {
        id: 16,
        firstName: "សុន",
        lastName: "ជីវន្ត",
        gender: "Male",
        teams: { ADS: "Team 3"}
    },
    // --- STUDENT 17 ---
    {
        id: 17,
        firstName: "ប៊ី",
        lastName: "វីរះបុត្រ",
        gender: "Male",
        teams: { ADS: "Team 3" }
    },
    // --- STUDENT 18 ---
    {
        id: 18,
        firstName: "សុីណេត",
        lastName: "ផានីន",
        gender: "Female",
        teams: { ADS: "Team 3"}
    },
    // --- STUDENT 19 ---
    {
        id: 19,
        firstName: "ហេង",
        lastName: "គង់",
        gender: "Male",
        teams: { ADS: "Team 3" }
    },
    // --- STUDENT 20 ---
    {
        id: 20,
        firstName: "វិត",
        lastName: "សុខធី",
        gender: "Female",
        teams: { ADS: "Team 4"}
    },
    // --- STUDENT 21 ---
    {
        id: 21,
        firstName: "ផល",
        lastName: "សុផាត",
        gender: "Male",
        teams: { ADS: "Team 4" }
    },
    // --- STUDENT 22 ---
    {
        id: 22,
        firstName: "ប្រាក់",
        lastName: "ភិរម្យ",
        gender: "Female",
        teams: { ADS: "Team 4"}
    },
    // --- STUDENT 23 ---
    {
        id: 23,
        firstName: "សឿន",
        lastName: "ពុទ្ធារិទ្ធ",
        gender: "Male",
        teams: { ADS: "Team 4" }
    },
    // --- STUDENT 24 ---
    {
        id: 24,
        firstName: "ផុន",
        lastName: "គន្ធា",
        gender: "Female",
        teams: { ADS: "Team 4"}
    },
    // --- STUDENT 25 ---
    {
        id: 25,
        firstName: "សួន",
        lastName: "លីហុង",
        gender: "Male",
        teams: { ADS: "Team 5" }
    },
    // --- STUDENT 26 ---
    {
        id: 26,
        firstName: "ប៉ាក",
        lastName: "សុផេង",
        gender: "Female",
        teams: { ADS: "Team 5"}
    },
    // --- STUDENT 27 ---
    {
        id: 27,
        firstName: "ប្រង់",
        lastName: "ឈន់",
        gender: "Male",
        teams: { ADS: "Team 5" }
    },
    // --- STUDENT 28 ---
    {
        id: 28,
        firstName: "ផល្លី",
        lastName: "ឯកតារា",
        gender: "Male",
        teams: { ADS: "Team 5"}
    },
    // --- STUDENT 29 ---
    {
        id: 29,
        firstName: "Student",
        lastName: "29",
        gender: "Male",
        teams: { ADS: "Team 5", DC: "Team 5", DB: "Team 3", CA: "Team 2", JAVA: "Team 1", ENGLISH: "Team 6" }
    },
    // --- STUDENT 30 ---
    {
        id: 30,
        firstName: "ផូយ",
        lastName: "វិច្ឆិកា",
        gender: "Male",
        teams: { ADS: "Team 5"}
    },
    // --- STUDENT 31 ---
    {
        id: 31,
        firstName: "ហេង",
        lastName: "មិថុនា",
        gender: "Male",
        teams: { ADS: "Team 6" }
    },
    // --- STUDENT 32 ---
    {
        id: 32,
        firstName: "ឡាយ",
        lastName: "រិទ្ធនរិន្ទ",
        gender: "Male",
        teams: { ADS: "Team 6" }
    },
    // --- STUDENT 33 ---
    {
        id: 33,
        firstName: "ឡេង",
        lastName: "សែនរិទ្ធី",
        gender: "Male",
        teams: { ADS: "Team 6" }
    },
    // --- STUDENT 34 ---
    {
        id: 34,
        firstName: "ហេង",
        lastName: "ម៉េងលី",
        gender: "Male",
        teams: { ADS: "Team 6" }
    },
    // --- STUDENT 35 ---
    {
        id: 35,
        firstName: "ឡៅ",
        lastName: "សុភក្រ្តា",
        gender: "Male",
        teams: { ADS: "Team 7" }
    },
    // --- STUDENT 36 ---
    {
        id: 36,
        firstName: "សើ",
        lastName: "សុថាកណ្ណិកា",
        gender: "Female",
        teams: { ADS: "Team 7" }
    },
    // --- STUDENT 37 ---
    {
        id: 37,
        firstName: "ផល្លី",
        lastName: "អ៊ីន",
        gender: "Female",
        teams: { ADS: "Team 7" }
    },
    // --- STUDENT 38 ---
    {
        id: 38,
        firstName: "សុី",
        lastName: "ចរិយា",
        gender: "Female",
        teams: { ADS: "Team 7" }
    },
    // --- STUDENT 39 ---
    {
        id: 39,
        firstName: "ផាត",
        lastName: "មុីលី",
        gender: "Female",
        teams: { ADS: "Team 7" }
    },
    // --- STUDENT 40 ---
    {
        id: 40,
        firstName: "ផុន",
        lastName: "លីឆាយ",
        gender: "Male",
        teams: { ADS: "Team 8" }
    },
    // --- STUDENT 41 ---
    {
        id: 41,
        firstName: "ផែង",
        lastName: "លីយូ",
        gender: "Male",
        teams: { ADS: "Team 8" }
    },
    // --- STUDENT 42 ---
    {
        id: 42,
        firstName: "ផាង",
        lastName: "ថានិត",
        gender: "Male",
        teams: { ADS: "Team 8" }
    },
    // --- STUDENT 43 ---
    {
        id: 43,
        firstName: "សុវ័ត្ន",
        lastName: "លីហ៊ួ",
        gender: "Male",
        teams: { ADS: "Team 8" }
    },
    // --- STUDENT 44 ---
    {
        id: 44,
        firstName: "ប៉េង",
        lastName: "ច័ន្ទសុវណ្ណចន្រ្ទា",
        gender: "Male",
        teams: { ADS: "Team 8" }
    },
    // --- STUDENT 45 ---
    
    // --- STUDENT 46 ---
    {
        id: 46,
        firstName: "អៀម",
        lastName: "ម៉េងហ៊ួរ",
        gender: "Male",
        teams: { ADS: "Team 10" }
    },
    // --- STUDENT 47 ---
    {
        id: 47,
        firstName: "ឡុង",
        lastName: "យូឃៀម",
        gender: "Male",
        teams: { ADS: "Team 10" }
    },
    // --- STUDENT 48 ---
    {
        id: 48,
        firstName: "សា",
        lastName: "ហាំម៉ាត់",
        gender: "Male",
        teams: { ADS: "Team 10" }
    },
    // --- STUDENT 49 ---
    {
        id: 49,
        firstName: "សយ",
        lastName: "សុធម្មោ",
        gender: "Male",
        teams: { ADS: "Team 10" }
    },
    // --- STUDENT 50 ---
    {
        id: 50,
        firstName: "ស",
        lastName: "ពិសិដ្ឋ",
        gender: "Male",
        teams: { ADS: "Team 10" }
    },
    // --- STUDENT 51 ---
    {
        id: 51,
        firstName: "បូរ៉ា",
        lastName: "វេហា",
        gender: "Male",
        teams: { ADS: "Team 11" }
    },
    // --- STUDENT 52 ---
    {
        id: 52,
        firstName: "Student",
        lastName: "52",
        gender: "Female",
        teams: { ADS: "Team 11", DC: "Team 7", DB: "Team 1", CA: "Team 7", JAVA: "Team 8", ENGLISH: "Team 1" }
    },
    // --- STUDENT 53 ---
    {
        id: 53,
        firstName: "Student",
        lastName: "53",
        gender: "Male",
        teams: { ADS: "Team 11", DC: "Team 8", DB: "Team 7", CA: "Team 8", JAVA: "Team 1", ENGLISH: "Team 7" }
    },
    // --- STUDENT 54 ---
    {
        id: 54,
        firstName: "Student",
        lastName: "54",
        gender: "Female",
        teams: { ADS: "Team 11", DC: "Team 9", DB: "Team 8", CA: "Team 9", JAVA: "Team 7", ENGLISH: "Team 8" }
    }
];