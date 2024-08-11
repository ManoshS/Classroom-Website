import React, { useState } from 'react';
import ModalForm from './ModalForm';
import axiosInstance from '../authComponent/axiosInstance';

const TimetableComponent = () => {
    const [classroom_id, setClassroom_id] = useState(1);
    const [timetables, setTimetables] = useState([]);
    const [selectedTimetable, setSelectedTimetable] = useState(null);

    const handleChange = (e) => {
        setClassroom_id(e.target.value);
    };

    const handleSubmit = () => {
        axiosInstance.get(`/timetable/timetables/${classroom_id}`)
            .then(response => {
                setTimetables(response.data);
                console.log(response);
            })
            .catch(error => console.error('Error fetching Timetable:', error));
    };

    const handleCreateOrUpdate = (timetable) => {
        if (timetable.timetable_id) {
            setTimetables(timetables.map(t => (t.timetable_id === timetable.timetable_id ? timetable : t)));
            axiosInstance.put(`/timetable/timetables/${timetable.timetable_id}`, timetable)
                .then(response => console.log(response))
                .catch(error => console.error('Error updating timetable:', error));
        } else {
            axiosInstance.post(`/timetable/timetables/`, timetable)
                .then(response => {
                    console.log("Inserted");
                    setTimetables([...timetables, response.data]); // Add the newly created timetable to the list
                })
                .catch(error => console.error('Error creating timetable:', error));
        }
    };

    const handleDelete = (id) => {
        setTimetables(timetables.filter(timetable => timetable.timetable_id !== id));
        axiosInstance.delete(`/timetable/timetables/${id}`)
            .then(response => console.log("Deleted"))
            .catch(error => console.error('Error deleting timetable:', error));
    };

    return (
        <div>
            <h2 className="text-2xl mb-4">Timetable</h2>
            <button onClick={() => setSelectedTimetable({})} className="bg-green-500 text-white py-1 px-3 rounded mb-4">
                Add Timetable Entry
            </button>
            <ul className="space-y-2">
                <div>
                    Enter Classroom Id to get Timetable
                    <input type="text" value={classroom_id} onChange={handleChange} className="border p-2 mr-2" />
                    <button onClick={handleSubmit} className="bg-blue-500 text-white py-1 px-3 rounded">
                        Submit
                    </button>
                </div>

                <div className="p-4 bg-white shadow rounded flex justify-between">
                    <div>
                        <h3 className="font-bold">{timetables.sub1}</h3>
                        <p>{timetables.sub2}, {timetables.start_time} - {timetables.classroom}</p>
                    </div>
                    <div className="space-x-2">
                        <button onClick={() => setSelectedTimetable(timetables)} className="bg-yellow-500 text-white py-1 px-3 rounded">Edit</button>
                        <button onClick={() => handleDelete(timetables.timetable_id)} className="bg-red-500 text-white py-1 px-3 rounded">Delete</button>
                    </div>
                </div>

            </ul>
            {selectedTimetable && (
                <ModalForm
                    entity={selectedTimetable}
                    onSave={handleCreateOrUpdate}
                    onClose={() => setSelectedTimetable(null)}
                    type="Timetable"
                />
            )}
        </div>
    );
};

export default TimetableComponent;
