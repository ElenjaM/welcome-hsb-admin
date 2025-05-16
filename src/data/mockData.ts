// Define types for our data structures
interface Department {
    id: number;
    name: string;
    description: string;
}

interface UniversityMember {
    id: number;
    name: string;
    email: string;
    departmentId: number;
}

interface Building {
    id: number;
    name: string;
    address: string;
}

interface Room {
    id: number;
    name: string;
    floor: number;
    type: string;
    buildingId: number;
}

interface Event {
    id: number;
    title: string;
    description: string;
    date: string;
    startTime: string;
    endTime: string;
    roomId: number;
}

interface RoomUsage {
    roomId: number;
    memberId: number;
    id: string;
}

// Data arrays with type definitions
export const departmentData: Department[] = [
    {
        id: 1,
        name: 'Computer Science',
        description: 'Department for Computer Science and Digital Media'
    },
    {
        id: 2,
        name: 'Business Administration',
        description: 'Department for Business, Economics and Information Systems'
    },
    {
        id: 3,
        name: 'Social Work',
        description: 'Department for Social Work and Social Education'
    },
    {
        id: 4,
        name: 'Administration',
        description: 'University Administration and Services'
    },
    {
        id: 5,
        name: 'Library',
        description: 'University Library and Media Center'
    }
];

export const universityMemberData: UniversityMember[] = [
    {
        id: 1,
        name: 'Prof. Dr. Schmidt',
        email: 'schmidt@university.edu',
        departmentId: 1
    },
    {
        id: 2,
        name: 'Dr. Miller',
        email: 'miller@university.edu',
        departmentId: 1
    },
    {
        id: 3,
        name: 'Prof. Dr. Baker',
        email: 'baker@university.edu',
        departmentId: 2
    },
    {
        id: 4,
        name: 'Maria Weber',
        email: 'weber@university.edu',
        departmentId: 4
    },
    {
        id: 5,
        name: 'Thomas Klein',
        email: 'klein@university.edu',
        departmentId: 5
    }
];

export const buildingData: Building[] = [
    {
        id: 1,
        name: 'Main Building',
        address: 'University Street 1'
    },
    {
        id: 2,
        name: 'Computer Science Building',
        address: 'University Street 2'
    },
    {
        id: 3,
        name: 'Business Building',
        address: 'University Street 3'
    },
    {
        id: 4,
        name: 'Library Building',
        address: 'University Street 4'
    }
];

export const roomData: Room[] = [
    {
        id: 1,
        name: 'Lecture Hall A',
        floor: 1,
        type: 'Lecture Hall',
        buildingId: 1
    },
    {
        id: 2,
        name: 'Seminar Room 101',
        floor: 1,
        type: 'Seminar Room',
        buildingId: 1
    },
    {
        id: 3,
        name: 'Lab 201',
        floor: 2,
        type: 'Computer Lab',
        buildingId: 2
    },
    {
        id: 4,
        name: 'Lecture Hall B',
        floor: 1,
        type: 'Lecture Hall',
        buildingId: 3
    },
    {
        id: 5,
        name: 'Library Hall',
        floor: 1,
        type: 'Reading Room',
        buildingId: 4
    }
];

export const eventData: Event[] = [
    {
        id: 1,
        title: 'Introduction to Programming',
        description: 'Fundamentals of Java Programming',
        date: '2025-05-20',
        startTime: '09:00',
        endTime: '10:30',
        roomId: 1
    },
    {
        id: 2,
        title: 'Databases I',
        description: 'Fundamentals of Relational Databases',
        date: '2025-05-20',
        startTime: '11:00',
        endTime: '12:30',
        roomId: 1
    },
    {
        id: 3,
        title: 'Business Administration Seminar',
        description: 'Seminar on Business Administration',
        date: '2025-05-21',
        startTime: '14:00',
        endTime: '15:30',
        roomId: 4
    },
    {
        id: 4,
        title: 'Research Colloquium',
        description: 'Current Research Projects',
        date: '2025-05-22',
        startTime: '10:00',
        endTime: '11:30',
        roomId: 2
    }
];

export const roomUsageData: RoomUsage[] = [
    {
        roomId: 1,
        memberId: 1,
        id: '1-1'
    },
    {
        roomId: 1,
        memberId: 2,
        id: '1-2'
    },
    {
        roomId: 4,
        memberId: 3,
        id: '4-3'
    },
    {
        roomId: 2,
        memberId: 1,
        id: '2-1'
    }
];