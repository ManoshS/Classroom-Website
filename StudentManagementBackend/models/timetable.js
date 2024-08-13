const db = require('../config/db');

const Timetable = {
    create: async (timetable) => {
        const query = `INSERT INTO timetable (classroom_id, day_of_week, class1_start_time, class1_end_time,sub1,
       class2_start_time, class2_end_time,sub2,
       class3_start_time, class3_end_time,sub3,
       class4_start_time, class4_end_time,sub4 ) VALUES (?, ?, ?, ?,?,?,?,?,?,?,?,?,?,?)`;
        const [result] = await db.query(query, [timetable.classroom_id, timetable.day_of_week,
        timetable.class1_start_time, timetable.class1_end_time, timetable.sub1,
        timetable.class2_start_time, timetable.class2_end_time, timetable.sub2,
        timetable.class3_start_time, timetable.class3_end_time, timetable.sub3,
        timetable.class4_start_time, timetable.class4_end_time, timetable.sub4]);
        return result;
    },

    findAllByClassroomId: async (classroom_id) => {
        const query = `SELECT * FROM timetable WHERE classroom_id = ?`;
        const [result] = await db.query(query, [classroom_id]);
        return result;
    },

    update: async (id, timetable) => {
        const query = `UPDATE timetable SET classroom_id = ?, day_of_week = ?, class1_start_time = ?, class1_end_time = ?,sub1 = ?,
        class2_start_time = ?, class2_end_time = ?,sub2 = ?,
        class3_start_time = ?, class3_end_time = ?,sub3 = ?,
        class4_start_time = ?, class4_end_time = ?,sub4 = ?  WHERE timetable_id = ?`;
        const [result] = await db.query(query, [timetable.classroom_id, timetable.day_of_week,
        timetable.class1_start_time, timetable.class1_end_time, timetable.sub1,
        timetable.class2_start_time, timetable.class2_end_time, timetable.sub2,
        timetable.class3_start_time, timetable.class3_end_time, timetable.sub3,
        timetable.class4_start_time, timetable.class4_end_time, timetable.sub4, id]);
        return result;
    },

    delete: async (id) => {
        const query = `DELETE FROM timetable WHERE timetable_id = ?`;
        const [result] = await db.query(query, [id]);
        return result;
    }
};

module.exports = Timetable;
