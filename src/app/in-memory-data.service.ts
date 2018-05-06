import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const schedules = [
    
    {
      "id": 1,
      "time": "12:00 AM",
      "van_id": 11,
      "route": "SHELL-MH",
      "location": "3 wsq",
      "direction": "IN"
    },
    {
      "id": 2,
      "time": "12:05 AM",
      "van_id": 7,
      "route": "PROP-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 3,
      "time": "12:10 AM",
      "van_id": 12,
      "route": "MH-MM",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 4,
      "time": "12:15 AM",
      "van_id": 10,
      "route": "MH-SHELL-SM",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 5,
      "time": "12:15 AM",
      "van_id": 9,
      "route": "SHELL-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 6,
      "time": "12:15 AM",
      "van_id": 4,
      "route": "G4-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 7,
      "time": "12:20 AM",
      "van_id": 5,
      "route": "MH-G4-SM",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 8,
      "time": "12:20 AM",
      "van_id": 6,
      "route": "MH-PROP",
      "location": "3 wsq",
      "direction": "OUT"
    },
    {
      "id": 9,
      "time": "12:25 AM",
      "van_id": 8,
      "route": "PROP-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 10,
      "time": "12:30 AM",
      "van_id": 11,
      "route": "MH-SHELL-SM",
      "location": "3 wsq",
      "direction": "OUT"
    },
    {
      "id": 11,
      "time": "12:40 AM",
      "van_id": 12,
      "route": "MM-MH",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 12,
      "time": "12:45 AM",
      "van_id": 9,
      "route": "MH-SHELL-SM",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 13,
      "time": "12:45 AM",
      "van_id": 10,
      "route": "SHELL-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 14,
      "time": "12:45 AM",
      "van_id": 7,
      "route": "MH-PROP",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 15,
      "time": "12:55 AM",
      "van_id": 5,
      "route": "G4-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 16,
      "time": "1:00 AM",
      "van_id": 11,
      "route": "SHELL-MH",
      "location": "3 wsq",
      "direction": "IN"
    },
    {
      "id": 17,
      "time": "1:05 AM",
      "van_id": 8,
      "route": "MH-MM-PROP",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 18,
      "time": "1:05 AM",
      "van_id": 6,
      "route": "PROP-MH",
      "location": "3 wsq",
      "direction": "IN"
    },
    {
      "id": 19,
      "time": "1:10 AM",
      "van_id": 12,
      "route": "MH-MM",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 20,
      "time": "1:15 AM",
      "van_id": 10,
      "route": "MH-SHELL-SM",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 21,
      "time": "1:15 AM",
      "van_id": 9,
      "route": "SHELL-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 22,
      "time": "1:15 AM",
      "van_id": 7,
      "route": "PROP-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 23,
      "time": "1:30 AM",
      "van_id": 11,
      "route": "MH-SHELL-SM",
      "location": "3 wsq",
      "direction": "OUT"
    },
    {
      "id": 24,
      "time": "1:35 AM",
      "van_id": 6,
      "route": "MH-MM-PROP",
      "location": "3 wsq",
      "direction": "OUT"
    },
    {
      "id": 25,
      "time": "1:35 AM",
      "van_id": 8,
      "route": "PROP-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 26,
      "time": "1:40 AM",
      "van_id": 12,
      "route": "MM-MH",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 27,
      "time": "1:45 AM",
      "van_id": 9,
      "route": "MH-SHELL-SM",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 28,
      "time": "1:45 AM",
      "van_id": 10,
      "route": "SHELL-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 29,
      "time": "1:45 AM",
      "van_id": 7,
      "route": "MH-MM-PROP",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 30,
      "time": "2:00 AM",
      "van_id": 11,
      "route": "SHELL-MH",
      "location": "3 wsq",
      "direction": "IN"
    },
    {
      "id": 31,
      "time": "2:05 AM",
      "van_id": 6,
      "route": "PROP-MH",
      "location": "3 wsq",
      "direction": "IN"
    },
    {
      "id": 32,
      "time": "2:10 AM",
      "van_id": 12,
      "route": "MH-MM",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 33,
      "time": "2:15 AM",
      "van_id": 10,
      "route": "MH-SHELL-SM",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 34,
      "time": "2:15 AM",
      "van_id": 9,
      "route": "SHELL-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 35,
      "time": "2:15 AM",
      "van_id": 8,
      "route": "MH-MM-PROP",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 36,
      "time": "2:15 AM",
      "van_id": 7,
      "route": "PROP-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 37,
      "time": "2:30 AM",
      "van_id": 11,
      "route": "MH-SHELL-SM",
      "location": "3 wsq",
      "direction": "OUT"
    },
    {
      "id": 38,
      "time": "2:35 AM",
      "van_id": 6,
      "route": "MH-MM-PROP",
      "location": "3 wsq",
      "direction": "OUT"
    },
    {
      "id": 39,
      "time": "2:40 AM",
      "van_id": 12,
      "route": "MM-MH",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 40,
      "time": "2:45 AM",
      "van_id": 9,
      "route": "MH-SHELL-SM",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 41,
      "time": "2:45 AM",
      "van_id": 10,
      "route": "SHELL-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 42,
      "time": "2:45 AM",
      "van_id": 8,
      "route": "PROP-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 43,
      "time": "3:00 AM",
      "van_id": 11,
      "route": "SHELL-MH",
      "location": "3 wsq",
      "direction": "IN"
    },
    {
      "id": 44,
      "time": "3:05 AM",
      "van_id": 6,
      "route": "PROP-MH",
      "location": "3 wsq",
      "direction": "IN"
    },
    {
      "id": 45,
      "time": "3:10 AM",
      "van_id": 7,
      "route": "MH-MM-PROP",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 46,
      "time": "3:15 AM",
      "van_id": 10,
      "route": "MH-SHELL-SM",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 47,
      "time": "3:15 AM",
      "van_id": 9,
      "route": "SHELL-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 48,
      "time": "3:20 AM",
      "van_id": 8,
      "route": "MH-MM-PROP",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 49,
      "time": "3:30 AM",
      "van_id": 11,
      "route": "MH-SHELL-SM",
      "location": "3 wsq",
      "direction": "OUT"
    },
    {
      "id": 50,
      "time": "3:40 AM",
      "van_id": 6,
      "route": "MH-MM-PROP",
      "location": "3 wsq",
      "direction": "OUT"
    },
    {
      "id": 51,
      "time": "3:40 AM",
      "van_id": 7,
      "route": "PROP-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 52,
      "time": "3:45 AM",
      "van_id": 9,
      "route": "MH-SHELL-SM",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 53,
      "time": "3:45 AM",
      "van_id": 10,
      "route": "SHELL-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 54,
      "time": "3:50 AM",
      "van_id": 8,
      "route": "PROP-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 55,
      "time": "4:00 AM",
      "van_id": 11,
      "route": "SHELL-MH",
      "location": "3 wsq",
      "direction": "IN"
    },
    {
      "id": 56,
      "time": "4:10 AM",
      "van_id": 6,
      "route": "PROP-MH",
      "location": "3 wsq",
      "direction": "IN"
    },
    {
      "id": 57,
      "time": "4:10 AM",
      "van_id": 7,
      "route": "MH-MM-PROP",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 58,
      "time": "4:15 AM",
      "van_id": 10,
      "route": "MH-SHELL-SM",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 59,
      "time": "4:15 AM",
      "van_id": 9,
      "route": "SHELL-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 60,
      "time": "4:25 AM",
      "van_id": 8,
      "route": "MH-MM-PROP",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 61,
      "time": "4:30 AM",
      "van_id": 11,
      "route": "MH-SHELL-SM",
      "location": "3 wsq",
      "direction": "OUT"
    },
    {
      "id": 62,
      "time": "4:40 AM",
      "van_id": 7,
      "route": "PROP-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 63,
      "time": "4:45 AM",
      "van_id": 6,
      "route": "MH-MM-PROP",
      "location": "3 wsq",
      "direction": "OUT"
    },
    {
      "id": 64,
      "time": "4:45 AM",
      "van_id": 9,
      "route": "MH-SHELL",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 65,
      "time": "4:45 AM",
      "van_id": 10,
      "route": "SHELL-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 66,
      "time": "5:00 AM",
      "van_id": 8,
      "route": "PROP-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 67,
      "time": "5:00 AM",
      "van_id": 11,
      "route": "SHELL-MH",
      "location": "3 wsq",
      "direction": "IN"
    },
    {
      "id": 68,
      "time": "5:10 AM",
      "van_id": 7,
      "route": "MH-MM-PROP",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 69,
      "time": "5:10 AM",
      "van_id": 4,
      "route": "MH-G4-SM",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 70,
      "time": "5:10 AM",
      "van_id": 1,
      "route": "SL1-SHELL-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 71,
      "time": "5:15 AM",
      "van_id": 10,
      "route": "MH-SHELL",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 72,
      "time": "5:15 AM",
      "van_id": 6,
      "route": "PROP-MH",
      "location": "3 wsq",
      "direction": "IN"
    },
    {
      "id": 73,
      "time": "5:15 AM",
      "van_id": 9,
      "route": "SHELL-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 74,
      "time": "5:25 AM",
      "van_id": 3,
      "route": "SL1-SHELL-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 75,
      "time": "5:30 AM",
      "van_id": 8,
      "route": "MH-MM-PROP",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 76,
      "time": "5:40 AM",
      "van_id": 11,
      "route": "MH-SHELL",
      "location": "3 wsq",
      "direction": "OUT"
    },
    {
      "id": 77,
      "time": "5:40 AM",
      "van_id": 7,
      "route": "PROP-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 78,
      "time": "5:40 AM",
      "van_id": 5,
      "route": "MH-G4-SM",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 79,
      "time": "5:40 AM",
      "van_id": 1,
      "route": "MH-SL1",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 80,
      "time": "5:40 AM",
      "van_id": 2,
      "route": "SL1-SHELL-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 81,
      "time": "5:45 AM",
      "van_id": 4,
      "route": "G4-SHELL-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 82,
      "time": "5:45 AM",
      "van_id": 6,
      "route": "MH-PROP",
      "location": "3 wsq",
      "direction": "OUT"
    },
    {
      "id": 83,
      "time": "5:45 AM",
      "van_id": 9,
      "route": "MH-SHELL",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 84,
      "time": "5:45 AM",
      "van_id": 10,
      "route": "SHELL-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 85,
      "time": "5:55 AM",
      "van_id": 3,
      "route": "MH-SL1",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 86,
      "time": "6:00 AM",
      "van_id": 8,
      "route": "PROP-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 87,
      "time": "6:10 AM",
      "van_id": 7,
      "route": "MH-MM-PROP",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 88,
      "time": "6:10 AM",
      "van_id": 11,
      "route": "SHELL-MH",
      "location": "3 wsq",
      "direction": "IN"
    },
    {
      "id": 89,
      "time": "6:10 AM",
      "van_id": 2,
      "route": "MH-SL1",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 90,
      "time": "6:10 AM",
      "van_id": 1,
      "route": "SL1-SHELL-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 91,
      "time": "6:15 AM",
      "van_id": 5,
      "route": "G4-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 92,
      "time": "6:15 AM",
      "van_id": 4,
      "route": "MH-G4-SM",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 93,
      "time": "6:15 AM",
      "van_id": 10,
      "route": "MH-SHELL",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 94,
      "time": "6:15 AM",
      "van_id": 9,
      "route": "SHELL-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 95,
      "time": "6:25 AM",
      "van_id": 6,
      "route": "PROP-MH",
      "location": "3 wsq",
      "direction": "IN"
    },
    {
      "id": 96,
      "time": "6:25 AM",
      "van_id": 3,
      "route": "SL1-SHELL-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 97,
      "time": "6:30 AM",
      "van_id": 8,
      "route": "MH-MM-PROP",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 98,
      "time": "6:40 AM",
      "van_id": 11,
      "route": "MH-SHELL",
      "location": "3 wsq",
      "direction": "OUT"
    },
    {
      "id": 99,
      "time": "6:40 AM",
      "van_id": 7,
      "route": "PROP-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 100,
      "time": "6:40 AM",
      "van_id": 1,
      "route": "MH-SL1",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 101,
      "time": "6:40 AM",
      "van_id": 2,
      "route": "SL1-SHELL-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 102,
      "time": "6:45 AM",
      "van_id": 5,
      "route": "MH-G4-SM",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 103,
      "time": "6:45 AM",
      "van_id": 9,
      "route": "MH-SHELL",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 104,
      "time": "6:45 AM",
      "van_id": 10,
      "route": "SHELL-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 105,
      "time": "6:50 AM",
      "van_id": 4,
      "route": "G4-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 106,
      "time": "6:55 AM",
      "van_id": 3,
      "route": "MH-SL1",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 107,
      "time": "7:05 AM",
      "van_id": 6,
      "route": "MH-PROP",
      "location": "3 wsq",
      "direction": "OUT"
    },
    {
      "id": 108,
      "time": "7:10 AM",
      "van_id": 11,
      "route": "SHELL-MH",
      "location": "3 wsq",
      "direction": "IN"
    },
    {
      "id": 109,
      "time": "7:10 AM",
      "van_id": 2,
      "route": "MH-SL1",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 110,
      "time": "7:10 AM",
      "van_id": 8,
      "route": "PROP-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 111,
      "time": "7:10 AM",
      "van_id": 1,
      "route": "SL1-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 112,
      "time": "7:15 AM",
      "van_id": 10,
      "route": "MH-SHELL",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 113,
      "time": "7:20 AM",
      "van_id": 7,
      "route": "MH-PROP",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 114,
      "time": "7:20 AM",
      "van_id": 5,
      "route": "G4-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 115,
      "time": "7:20 AM",
      "van_id": 4,
      "route": "MH-G4-SM",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 116,
      "time": "7:20 AM",
      "van_id": 9,
      "route": "SHELL-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 117,
      "time": "7:35 AM",
      "van_id": 3,
      "route": "SL1-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 118,
      "time": "7:40 AM",
      "van_id": 11,
      "route": "MH-SHELL",
      "location": "3 wsq",
      "direction": "OUT"
    },
    {
      "id": 119,
      "time": "7:45 AM",
      "van_id": 6,
      "route": "PROP-MH",
      "location": "3 wsq",
      "direction": "IN"
    },
    {
      "id": 120,
      "time": "7:50 AM",
      "van_id": 5,
      "route": "MH-G4-SM",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 121,
      "time": "7:50 AM",
      "van_id": 8,
      "route": "MH-PROP",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 122,
      "time": "7:50 AM",
      "van_id": 1,
      "route": "MH-SL1",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 123,
      "time": "7:50 AM",
      "van_id": 10,
      "route": "SHELL-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 124,
      "time": "7:50 AM",
      "van_id": 2,
      "route": "SL1-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 125,
      "time": "7:55 AM",
      "van_id": 9,
      "route": "MH-SHELL",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 126,
      "time": "8:00 AM",
      "van_id": 7,
      "route": "PROP-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 127,
      "time": "8:05 AM",
      "van_id": 4,
      "route": "G4-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 128,
      "time": "8:15 AM",
      "van_id": 11,
      "route": "SHELL-MH",
      "location": "3 wsq",
      "direction": "IN"
    },
    {
      "id": 129,
      "time": "8:20 AM",
      "van_id": 3,
      "route": "MH-G4-SM",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 130,
      "time": "8:25 AM",
      "van_id": 6,
      "route": "MH-PROP",
      "location": "3 wsq",
      "direction": "OUT"
    },
    {
      "id": 131,
      "time": "8:25 AM",
      "van_id": 10,
      "route": "MH-SHELL",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 132,
      "time": "8:30 AM",
      "van_id": 2,
      "route": "MH-SL1",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 133,
      "time": "8:30 AM",
      "van_id": 8,
      "route": "PROP-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 134,
      "time": "8:30 AM",
      "van_id": 1,
      "route": "SL1-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 135,
      "time": "8:30 AM",
      "van_id": 9,
      "route": "SHELL-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 136,
      "time": "8:35 AM",
      "van_id": 5,
      "route": "G4-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 137,
      "time": "8:40 AM",
      "van_id": 7,
      "route": "MH-PROP",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 138,
      "time": "8:40 AM",
      "van_id": 4,
      "route": "MH-G4-SM",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 139,
      "time": "8:50 AM",
      "van_id": 11,
      "route": "MH-SHELL",
      "location": "3 wsq",
      "direction": "OUT"
    },
    {
      "id": 140,
      "time": "9:00 AM",
      "van_id": 10,
      "route": "SHELL-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 141,
      "time": "9:05 AM",
      "van_id": 3,
      "route": "G4-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 142,
      "time": "9:05 AM",
      "van_id": 6,
      "route": "PROP-MH",
      "location": "3 wsq",
      "direction": "IN"
    },
    {
      "id": 143,
      "time": "9:05 AM",
      "van_id": 9,
      "route": "MH-SHELL",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 144,
      "time": "9:10 AM",
      "van_id": 5,
      "route": "MH-G4-SM",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 145,
      "time": "9:10 AM",
      "van_id": 8,
      "route": "MH-PROP",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 146,
      "time": "9:10 AM",
      "van_id": 1,
      "route": "MH-SL1",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 147,
      "time": "9:10 AM",
      "van_id": 2,
      "route": "SL1-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 148,
      "time": "9:20 AM",
      "van_id": 7,
      "route": "PROP-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 149,
      "time": "9:25 AM",
      "van_id": 11,
      "route": "SHELL-MH",
      "location": "3 wsq",
      "direction": "IN"
    },
    {
      "id": 150,
      "time": "9:25 AM",
      "van_id": 4,
      "route": "G4-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 151,
      "time": "9:35 AM",
      "van_id": 10,
      "route": "MH-SHELL",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 152,
      "time": "9:40 AM",
      "van_id": 9,
      "route": "SHELL-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 153,
      "time": "9:45 AM",
      "van_id": 6,
      "route": "MH-PROP",
      "location": "3 wsq",
      "direction": "OUT"
    },
    {
      "id": 154,
      "time": "9:50 AM",
      "van_id": 3,
      "route": "MH-G4-SM",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 155,
      "time": "9:50 AM",
      "van_id": 2,
      "route": "MH-SL1",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 156,
      "time": "9:50 AM",
      "van_id": 8,
      "route": "PROP-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 157,
      "time": "9:50 AM",
      "van_id": 1,
      "route": "SL1-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 158,
      "time": "9:55 AM",
      "van_id": 5,
      "route": "G4-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 159,
      "time": "10:00 AM",
      "van_id": 11,
      "route": "MH-SHELL",
      "location": "3 wsq",
      "direction": "OUT"
    },
    {
      "id": 160,
      "time": "10:05 AM",
      "van_id": 4,
      "route": "MH-G4-SM",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 161,
      "time": "10:10 AM",
      "van_id": 7,
      "route": "MH-PROP",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 162,
      "time": "10:10 AM",
      "van_id": 10,
      "route": "SHELL-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 163,
      "time": "10:15 AM",
      "van_id": 9,
      "route": "MH-SHELL",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 164,
      "time": "10:25 AM",
      "van_id": 6,
      "route": "PROP-MH",
      "location": "3 wsq",
      "direction": "IN"
    },
    {
      "id": 165,
      "time": "10:30 AM",
      "van_id": 5,
      "route": "MH-G4-SM",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 166,
      "time": "10:30 AM",
      "van_id": 8,
      "route": "MH-PROP",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 167,
      "time": "10:30 AM",
      "van_id": 1,
      "route": "MH-SL1",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 168,
      "time": "10:30 AM",
      "van_id": 2,
      "route": "SL1-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 169,
      "time": "10:35 AM",
      "van_id": 3,
      "route": "G4-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 170,
      "time": "10:35 AM",
      "van_id": 11,
      "route": "SHELL-MH",
      "location": "3 wsq",
      "direction": "IN"
    },
    {
      "id": 171,
      "time": "10:40 AM",
      "van_id": 4,
      "route": "G4-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 172,
      "time": "10:45 AM",
      "van_id": 10,
      "route": "MH-SHELL",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 173,
      "time": "10:50 AM",
      "van_id": 7,
      "route": "PROP-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 174,
      "time": "10:50 AM",
      "van_id": 9,
      "route": "SHELL-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 175,
      "time": "11:05 AM",
      "van_id": 5,
      "route": "G4-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 176,
      "time": "11:05 AM",
      "van_id": 6,
      "route": "MH-PROP",
      "location": "3 wsq",
      "direction": "OUT"
    },
    {
      "id": 177,
      "time": "11:10 AM",
      "van_id": 11,
      "route": "MH-SHELL",
      "location": "3 wsq",
      "direction": "OUT"
    },
    {
      "id": 178,
      "time": "11:10 AM",
      "van_id": 2,
      "route": "MH-SL1",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 179,
      "time": "11:10 AM",
      "van_id": 8,
      "route": "PROP-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 180,
      "time": "11:10 AM",
      "van_id": 1,
      "route": "SL1-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 181,
      "time": "11:15 AM",
      "van_id": 4,
      "route": "MH-G4-SM",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 182,
      "time": "11:20 AM",
      "van_id": 10,
      "route": "SHELL-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 183,
      "time": "11:25 AM",
      "van_id": 9,
      "route": "MH-SHELL",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 184,
      "time": "11:30 AM",
      "van_id": 7,
      "route": "MH-PROP",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 185,
      "time": "11:40 AM",
      "van_id": 5,
      "route": "MH-G4-SM",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 186,
      "time": "11:45 AM",
      "van_id": 6,
      "route": "PROP-MH",
      "location": "3 wsq",
      "direction": "IN"
    },
    {
      "id": 187,
      "time": "11:45 AM",
      "van_id": 11,
      "route": "SHELL-MH",
      "location": "3 wsq",
      "direction": "IN"
    },
    {
      "id": 188,
      "time": "11:50 AM",
      "van_id": 4,
      "route": "G4-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 189,
      "time": "11:50 AM",
      "van_id": 8,
      "route": "MH-PROP",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 190,
      "time": "11:50 AM",
      "van_id": 1,
      "route": "MH-SL1",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 191,
      "time": "11:50 AM",
      "van_id": 2,
      "route": "SL1-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 192,
      "time": "11:50 AM",
      "van_id": 3,
      "route": "MH-G4-SM",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 193,
      "time": "11:55 AM",
      "van_id": 10,
      "route": "MH-SHELL",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 194,
      "time": "12:00 PM",
      "van_id": 9,
      "route": "SHELL-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 195,
      "time": "12:10 PM",
      "van_id": 7,
      "route": "PROP-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 196,
      "time": "12:15 PM",
      "van_id": 5,
      "route": "G4-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 197,
      "time": "12:20 PM",
      "van_id": 11,
      "route": "MH-SHELL",
      "location": "3 wsq",
      "direction": "OUT"
    },
    {
      "id": 198,
      "time": "12:25 PM",
      "van_id": 4,
      "route": "MH-G4-SM",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 199,
      "time": "12:25 PM",
      "van_id": 6,
      "route": "MH-PROP",
      "location": "3 wsq",
      "direction": "OUT"
    },
    {
      "id": 200,
      "time": "12:30 PM",
      "van_id": 10,
      "route": "SHELL-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 201,
      "time": "12:30 PM",
      "van_id": 3,
      "route": "G4-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 202,
      "time": "12:30 PM",
      "van_id": 2,
      "route": "MH-SL1",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 203,
      "time": "12:30 PM",
      "van_id": 8,
      "route": "PROP-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 204,
      "time": "12:30 PM",
      "van_id": 1,
      "route": "SL1-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 205,
      "time": "12:35 PM",
      "van_id": 9,
      "route": "MH-SHELL",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 206,
      "time": "12:50 PM",
      "van_id": 5,
      "route": "MH-G4-SM",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 207,
      "time": "12:50 PM",
      "van_id": 7,
      "route": "MH-PROP",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 208,
      "time": "12:55 PM",
      "van_id": 11,
      "route": "SHELL-MH",
      "location": "3 wsq",
      "direction": "IN"
    },
    {
      "id": 209,
      "time": "1:00 PM",
      "van_id": 4,
      "route": "G4-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 210,
      "time": "1:05 PM",
      "van_id": 10,
      "route": "MH-SHELL",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 211,
      "time": "1:05 PM",
      "van_id": 6,
      "route": "PROP-MH",
      "location": "3 wsq",
      "direction": "IN"
    },
    {
      "id": 212,
      "time": "1:10 PM",
      "van_id": 9,
      "route": "SHELL-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 213,
      "time": "1:10 PM",
      "van_id": 8,
      "route": "MH-PROP",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 214,
      "time": "1:10 PM",
      "van_id": 1,
      "route": "MH-SL1",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 215,
      "time": "1:25 PM",
      "van_id": 5,
      "route": "G4-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 216,
      "time": "1:25 PM",
      "van_id": 2,
      "route": "SL1-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 217,
      "time": "1:30 PM",
      "van_id": 11,
      "route": "MH-SHELL",
      "location": "3 wsq",
      "direction": "OUT"
    },
    {
      "id": 218,
      "time": "1:30 PM",
      "van_id": 3,
      "route": "MH-SL1",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 219,
      "time": "1:30 PM",
      "van_id": 7,
      "route": "PROP-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 220,
      "time": "1:35 PM",
      "van_id": 4,
      "route": "MH-G4-SM",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 221,
      "time": "1:40 PM",
      "van_id": 10,
      "route": "SHELL-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 222,
      "time": "1:45 PM",
      "van_id": 9,
      "route": "MH-SHELL",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 223,
      "time": "1:45 PM",
      "van_id": 6,
      "route": "MH-PROP",
      "location": "3 wsq",
      "direction": "OUT"
    },
    {
      "id": 224,
      "time": "1:50 PM",
      "van_id": 8,
      "route": "PROP-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 225,
      "time": "1:50 PM",
      "van_id": 1,
      "route": "SL1-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 226,
      "time": "2:05 PM",
      "van_id": 5,
      "route": "MH-G4-SM",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 227,
      "time": "2:05 PM",
      "van_id": 11,
      "route": "SHELL-MH",
      "location": "3 wsq",
      "direction": "IN"
    },
    {
      "id": 228,
      "time": "2:05 PM",
      "van_id": 2,
      "route": "MH-SL1",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 229,
      "time": "2:10 PM",
      "van_id": 4,
      "route": "G4-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 230,
      "time": "2:10 PM",
      "van_id": 7,
      "route": "MH-PROP",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 231,
      "time": "2:10 PM",
      "van_id": 3,
      "route": "SL1-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 232,
      "time": "2:15 PM",
      "van_id": 10,
      "route": "MH-SHELL",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 233,
      "time": "2:20 PM",
      "van_id": 9,
      "route": "SHELL-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 234,
      "time": "2:25 PM",
      "van_id": 6,
      "route": "PROP-MH",
      "location": "3 wsq",
      "direction": "IN"
    },
    {
      "id": 235,
      "time": "2:30 PM",
      "van_id": 8,
      "route": "MH-PROP",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 236,
      "time": "2:30 PM",
      "van_id": 1,
      "route": "MH-SL1",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 237,
      "time": "2:35 PM",
      "van_id": 5,
      "route": "G4-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 238,
      "time": "2:40 PM",
      "van_id": 11,
      "route": "MH-SHELL",
      "location": "3 wsq",
      "direction": "OUT"
    },
    {
      "id": 239,
      "time": "2:40 PM",
      "van_id": 2,
      "route": "SL1-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 240,
      "time": "2:45 PM",
      "van_id": 4,
      "route": "MH-G4-SM",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 241,
      "time": "2:50 PM",
      "van_id": 10,
      "route": "SHELL-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 242,
      "time": "2:50 PM",
      "van_id": 7,
      "route": "PROP-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 243,
      "time": "2:55 PM",
      "van_id": 9,
      "route": "MH-SHELL",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 244,
      "time": "3:05 PM",
      "van_id": 6,
      "route": "MH-PROP",
      "location": "3 wsq",
      "direction": "OUT"
    },
    {
      "id": 245,
      "time": "3:05 PM",
      "van_id": 3,
      "route": "MH-SL1",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 246,
      "time": "3:10 PM",
      "van_id": 5,
      "route": "MH-G4-SM",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 247,
      "time": "3:10 PM",
      "van_id": 8,
      "route": "PROP-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 248,
      "time": "3:10 PM",
      "van_id": 1,
      "route": "SL1-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 249,
      "time": "3:15 PM",
      "van_id": 11,
      "route": "SHELL-MH",
      "location": "3 wsq",
      "direction": "IN"
    },
    {
      "id": 250,
      "time": "3:15 PM",
      "van_id": 2,
      "route": "MH-SL1",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 251,
      "time": "3:20 PM",
      "van_id": 4,
      "route": "G4-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 252,
      "time": "3:25 PM",
      "van_id": 10,
      "route": "MH-SHELL",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 253,
      "time": "3:30 PM",
      "van_id": 9,
      "route": "SHELL-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 254,
      "time": "3:30 PM",
      "van_id": 7,
      "route": "MH-PROP",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 255,
      "time": "3:40 PM",
      "van_id": 3,
      "route": "SL1-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 256,
      "time": "3:45 PM",
      "van_id": 5,
      "route": "G4-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 257,
      "time": "3:45 PM",
      "van_id": 6,
      "route": "PROP-MH",
      "location": "3 wsq",
      "direction": "IN"
    },
    {
      "id": 258,
      "time": "3:50 PM",
      "van_id": 11,
      "route": "MH-SHELL",
      "location": "3 wsq",
      "direction": "OUT"
    },
    {
      "id": 259,
      "time": "3:50 PM",
      "van_id": 8,
      "route": "MH-PROP",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 260,
      "time": "3:50 PM",
      "van_id": 1,
      "route": "MH-SL1",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 261,
      "time": "3:50 PM",
      "van_id": 2,
      "route": "SL1-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 262,
      "time": "3:55 PM",
      "van_id": 4,
      "route": "MH-G4-SM",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 263,
      "time": "4:00 PM",
      "van_id": 10,
      "route": "SHELL-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 264,
      "time": "4:05 PM",
      "van_id": 9,
      "route": "MH-SHELL",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 265,
      "time": "4:10 PM",
      "van_id": 7,
      "route": "PROP-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 266,
      "time": "4:20 PM",
      "van_id": 5,
      "route": "MH-G4-SM",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 267,
      "time": "4:25 PM",
      "van_id": 11,
      "route": "SHELL-MH",
      "location": "3 wsq",
      "direction": "IN"
    },
    {
      "id": 268,
      "time": "4:25 PM",
      "van_id": 6,
      "route": "MH-PROP",
      "location": "3 wsq",
      "direction": "OUT"
    },
    {
      "id": 269,
      "time": "4:25 PM",
      "van_id": 3,
      "route": "MH-G4-SM",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 270,
      "time": "4:30 PM",
      "van_id": 4,
      "route": "G4-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 271,
      "time": "4:30 PM",
      "van_id": 2,
      "route": "MH-SL1",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 272,
      "time": "4:30 PM",
      "van_id": 8,
      "route": "PROP-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 273,
      "time": "4:30 PM",
      "van_id": 1,
      "route": "SL1-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 274,
      "time": "4:35 PM",
      "van_id": 10,
      "route": "MH-SHELL",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 275,
      "time": "4:40 PM",
      "van_id": 9,
      "route": "SHELL-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 276,
      "time": "4:50 PM",
      "van_id": 7,
      "route": "MH-PROP",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 277,
      "time": "4:55 PM",
      "van_id": 5,
      "route": "G4-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 278,
      "time": "5:00 PM",
      "van_id": 11,
      "route": "MH-SHELL",
      "location": "3 wsq",
      "direction": "OUT"
    },
    {
      "id": 279,
      "time": "5:05 PM",
      "van_id": 4,
      "route": "MH-G4-SM",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 280,
      "time": "5:05 PM",
      "van_id": 6,
      "route": "PROP-MH",
      "location": "3 wsq",
      "direction": "IN"
    },
    {
      "id": 281,
      "time": "5:05 PM",
      "van_id": 3,
      "route": "G4-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 282,
      "time": "5:10 PM",
      "van_id": 10,
      "route": "SHELL-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 283,
      "time": "5:10 PM",
      "van_id": 8,
      "route": "MH-PROP",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 284,
      "time": "5:10 PM",
      "van_id": 1,
      "route": "MH-SL1",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 285,
      "time": "5:10 PM",
      "van_id": 2,
      "route": "SL1-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 286,
      "time": "5:10 PM",
      "van_id": 12,
      "route": "MH-MM",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 287,
      "time": "5:15 PM",
      "van_id": 9,
      "route": "MH-SHELL",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 288,
      "time": "5:30 PM",
      "van_id": 5,
      "route": "MH-G4-SM",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 289,
      "time": "5:30 PM",
      "van_id": 7,
      "route": "PROP-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 290,
      "time": "5:35 PM",
      "van_id": 11,
      "route": "SHELL-MH",
      "location": "3 wsq",
      "direction": "IN"
    },
    {
      "id": 291,
      "time": "5:45 PM",
      "van_id": 10,
      "route": "MH-SHELL",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 292,
      "time": "5:45 PM",
      "van_id": 6,
      "route": "MH-PROP",
      "location": "3 wsq",
      "direction": "OUT"
    },
    {
      "id": 293,
      "time": "5:45 PM",
      "van_id": 12,
      "route": "MM-MH",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 294,
      "time": "5:50 PM",
      "van_id": 9,
      "route": "SHELL-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 295,
      "time": "5:50 PM",
      "van_id": 4,
      "route": "G4-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 296,
      "time": "5:50 PM",
      "van_id": 2,
      "route": "MH-SL1",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 297,
      "time": "5:50 PM",
      "van_id": 8,
      "route": "PROP-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 298,
      "time": "5:50 PM",
      "van_id": 1,
      "route": "SL1-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 299,
      "time": "6:05 PM",
      "van_id": 11,
      "route": "MH-SHELL",
      "location": "3 wsq",
      "direction": "OUT"
    },
    {
      "id": 300,
      "time": "6:10 PM",
      "van_id": 7,
      "route": "MH-PROP",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 301,
      "time": "6:10 PM",
      "van_id": 3,
      "route": "MH-SL1",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 302,
      "time": "6:15 PM",
      "van_id": 5,
      "route": "G4-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 303,
      "time": "6:20 PM",
      "van_id": 10,
      "route": "SHELL-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 304,
      "time": "6:20 PM",
      "van_id": 12,
      "route": "MH-MM",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 305,
      "time": "6:25 PM",
      "van_id": 9,
      "route": "MH-SHELL",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 306,
      "time": "6:25 PM",
      "van_id": 6,
      "route": "PROP-MH",
      "location": "3 wsq",
      "direction": "IN"
    },
    {
      "id": 307,
      "time": "6:30 PM",
      "van_id": 4,
      "route": "MH-G4-SM",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 308,
      "time": "6:30 PM",
      "van_id": 8,
      "route": "MH-PROP",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 309,
      "time": "6:30 PM",
      "van_id": 1,
      "route": "MH-SL1",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 310,
      "time": "6:30 PM",
      "van_id": 2,
      "route": "SL1-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 311,
      "time": "6:40 PM",
      "van_id": 11,
      "route": "SHELL-MH",
      "location": "3 wsq",
      "direction": "IN"
    },
    {
      "id": 312,
      "time": "6:50 PM",
      "van_id": 7,
      "route": "PROP-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 313,
      "time": "6:50 PM",
      "van_id": 3,
      "route": "SL1-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 314,
      "time": "6:55 PM",
      "van_id": 10,
      "route": "MH-SHELL",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 315,
      "time": "6:55 PM",
      "van_id": 5,
      "route": "MH-G4-SM",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 316,
      "time": "6:55 PM",
      "van_id": 12,
      "route": "MM-MH",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 317,
      "time": "7:00 PM",
      "van_id": 9,
      "route": "SHELL-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 318,
      "time": "7:10 PM",
      "van_id": 2,
      "route": "MH-SL1",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 319,
      "time": "7:10 PM",
      "van_id": 1,
      "route": "SL1-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 320,
      "time": "7:15 PM",
      "van_id": 4,
      "route": "G4-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 321,
      "time": "7:15 PM",
      "van_id": 6,
      "route": "MH-PROP",
      "location": "3 wsq",
      "direction": "OUT"
    },
    {
      "id": 322,
      "time": "7:15 PM",
      "van_id": 11,
      "route": "MH-SHELL",
      "location": "3 wsq",
      "direction": "OUT"
    },
    {
      "id": 323,
      "time": "7:20 PM",
      "van_id": 8,
      "route": "PROP-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 324,
      "time": "7:30 PM",
      "van_id": 10,
      "route": "SHELL-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 325,
      "time": "7:30 PM",
      "van_id": 12,
      "route": "MH-G4",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 326,
      "time": "7:30 PM",
      "van_id": 3,
      "route": "MH-SL1",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 327,
      "time": "7:35 PM",
      "van_id": 9,
      "route": "MH-SHELL",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 328,
      "time": "7:35 PM",
      "van_id": 7,
      "route": "MH-PROP",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 329,
      "time": "7:40 PM",
      "van_id": 5,
      "route": "G4-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 330,
      "time": "7:50 PM",
      "van_id": 1,
      "route": "MH-SL1",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 331,
      "time": "7:50 PM",
      "van_id": 2,
      "route": "SL1-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 332,
      "time": "7:50 PM",
      "van_id": 11,
      "route": "SHELL-MH",
      "location": "3 wsq",
      "direction": "IN"
    },
    {
      "id": 333,
      "time": "8:05 PM",
      "van_id": 10,
      "route": "MH-SHELL",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 334,
      "time": "8:10 PM",
      "van_id": 9,
      "route": "SHELL-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 335,
      "time": "8:10 PM",
      "van_id": 12,
      "route": "G4-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 336,
      "time": "8:10 PM",
      "van_id": 4,
      "route": "MH-G4-SM",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 337,
      "time": "8:10 PM",
      "van_id": 3,
      "route": "SL1-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 338,
      "time": "8:15 PM",
      "van_id": 6,
      "route": "PROP-MH",
      "location": "3 wsq",
      "direction": "IN"
    },
    {
      "id": 339,
      "time": "8:20 PM",
      "van_id": 2,
      "route": "MH-SL1",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 340,
      "time": "8:20 PM",
      "van_id": 1,
      "route": "SL1-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 341,
      "time": "8:20 PM",
      "van_id": 8,
      "route": "MH-PROP",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 342,
      "time": "8:25 PM",
      "van_id": 11,
      "route": "MH-SHELL",
      "location": "3 wsq",
      "direction": "OUT"
    },
    {
      "id": 343,
      "time": "8:30 PM",
      "van_id": 5,
      "route": "MH-G4-SM",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 344,
      "time": "8:35 PM",
      "van_id": 7,
      "route": "PROP-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 345,
      "time": "8:40 PM",
      "van_id": 10,
      "route": "SHELL-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 346,
      "time": "8:45 PM",
      "van_id": 9,
      "route": "MH-SHELL",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 347,
      "time": "8:45 PM",
      "van_id": 4,
      "route": "G4-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 348,
      "time": "8:45 PM",
      "van_id": 12,
      "route": "MH-SHELL",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 349,
      "time": "8:50 PM",
      "van_id": 1,
      "route": "MH-SL1",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 350,
      "time": "8:50 PM",
      "van_id": 2,
      "route": "SL1-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 351,
      "time": "9:00 PM",
      "van_id": 11,
      "route": "SHELL-MH",
      "location": "3 wsq",
      "direction": "IN"
    },
    {
      "id": 352,
      "time": "9:05 PM",
      "van_id": 5,
      "route": "G4-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 353,
      "time": "9:10 PM",
      "van_id": 8,
      "route": "PROP-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 354,
      "time": "9:15 PM",
      "van_id": 9,
      "route": "SHELL-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 355,
      "time": "9:15 PM",
      "van_id": 10,
      "route": "MH-SHELL",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 356,
      "time": "9:15 PM",
      "van_id": 6,
      "route": "MH-PROP",
      "location": "3 wsq",
      "direction": "OUT"
    },
    {
      "id": 357,
      "time": "9:20 PM",
      "van_id": 2,
      "route": "MH-SL1",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 358,
      "time": "9:20 PM",
      "van_id": 1,
      "route": "SL1-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 359,
      "time": "9:20 PM",
      "van_id": 4,
      "route": "MH-G4-SM",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 360,
      "time": "9:25 PM",
      "van_id": 12,
      "route": "SHELL-MM-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 361,
      "time": "9:30 PM",
      "van_id": 11,
      "route": "MH-SHELL",
      "location": "3 wsq",
      "direction": "OUT"
    },
    {
      "id": 362,
      "time": "9:35 PM",
      "van_id": 7,
      "route": "MH-SHELL-PROP",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 363,
      "time": "9:40 PM",
      "van_id": 5,
      "route": "MH-G4-SM",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 364,
      "time": "9:45 PM",
      "van_id": 9,
      "route": "MH-SHELL",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 365,
      "time": "9:45 PM",
      "van_id": 10,
      "route": "SHELL-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 366,
      "time": "9:50 PM",
      "van_id": 2,
      "route": "SL1-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 367,
      "time": "9:55 PM",
      "van_id": 4,
      "route": "G4-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 368,
      "time": "10:00 PM",
      "van_id": 11,
      "route": "SHELL-MH",
      "location": "3 wsq",
      "direction": "IN"
    },
    {
      "id": 369,
      "time": "10:10 PM",
      "van_id": 12,
      "route": "MH-MM",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 370,
      "time": "10:10 PM",
      "van_id": 8,
      "route": "MH-SHELL-PROP",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 371,
      "time": "10:15 PM",
      "van_id": 9,
      "route": "SHELL-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 372,
      "time": "10:15 PM",
      "van_id": 10,
      "route": "MH-SHELL-SM",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 373,
      "time": "10:15 PM",
      "van_id": 5,
      "route": "G4-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 374,
      "time": "10:15 PM",
      "van_id": 6,
      "route": "PROP-MH",
      "location": "3 wsq",
      "direction": "IN"
    },
    {
      "id": 375,
      "time": "10:20 PM",
      "van_id": 2,
      "route": "MH-SL1",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 376,
      "time": "10:30 PM",
      "van_id": 11,
      "route": "MH-SHELL-G4",
      "location": "3 wsq",
      "direction": "OUT"
    },
    {
      "id": 377,
      "time": "10:30 PM",
      "van_id": 4,
      "route": "MH-G4-SM",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 378,
      "time": "10:35 PM",
      "van_id": 7,
      "route": "PROP-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 379,
      "time": "10:40 PM",
      "van_id": 12,
      "route": "MM-MH",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 380,
      "time": "10:45 PM",
      "van_id": 9,
      "route": "MH-SHELL-G4",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 381,
      "time": "10:45 PM",
      "van_id": 10,
      "route": "SHELL-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 382,
      "time": "10:50 PM",
      "van_id": 2,
      "route": "SL1-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 383,
      "time": "10:50 PM",
      "van_id": 5,
      "route": "MH-G4-SM",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 384,
      "time": "11:00 PM",
      "van_id": 11,
      "route": "SHELL-MH",
      "location": "3 wsq",
      "direction": "IN"
    },
    {
      "id": 385,
      "time": "11:00 PM",
      "van_id": 8,
      "route": "PROP-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 386,
      "time": "11:05 PM",
      "van_id": 4,
      "route": "G4-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 387,
      "time": "11:10 PM",
      "van_id": 12,
      "route": "MH-MM",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 388,
      "time": "11:10 PM",
      "van_id": 6,
      "route": "MH-PROP",
      "location": "3 wsq",
      "direction": "OUT"
    },
    {
      "id": 389,
      "time": "11:15 PM",
      "van_id": 9,
      "route": "SHELL-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 390,
      "time": "11:15 PM",
      "van_id": 10,
      "route": "MH-SHELL-SM",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 391,
      "time": "11:20 PM",
      "van_id": 2,
      "route": "MH-SL1",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 392,
      "time": "11:25 PM",
      "van_id": 5,
      "route": "G4-MH",
      "location": "8 bldg",
      "direction": "IN"
    },
    {
      "id": 393,
      "time": "11:25 PM",
      "van_id": 7,
      "route": "MH-PROP",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 394,
      "time": "11:30 PM",
      "van_id": 11,
      "route": "MH-SHELL-G4",
      "location": "3 wsq",
      "direction": "OUT"
    },
    {
      "id": 395,
      "time": "11:40 PM",
      "van_id": 4,
      "route": "MH-G4-SM",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 396,
      "time": "11:40 PM",
      "van_id": 12,
      "route": "MM-MH",
      "location": "20 bldg",
      "direction": "OUT"
    },
    {
      "id": 397,
      "time": "11:45 PM",
      "van_id": 9,
      "route": "MH-SHELL-G4",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 398,
      "time": "11:45 PM",
      "van_id": 10,
      "route": "SHELL-MH",
      "location": "20 bldg",
      "direction": "IN"
    },
    {
      "id": 399,
      "time": "11:45 PM",
      "van_id": 8,
      "route": "MH-SHELL-PROP",
      "location": "8 bldg",
      "direction": "OUT"
    },
    {
      "id": 400,
      "time": "11:45 PM",
      "van_id": 6,
      "route": "PROP-MH",
      "location": "3 wsq",
      "direction": "IN"
    },
    {
      "id": 401,
      "time": "11:50 PM",
      "van_id": 2,
      "route": "SL1-MH",
      "location": "20 bldg",
      "direction": "IN"
    }
    ];
    
    return {schedules};
  }
}