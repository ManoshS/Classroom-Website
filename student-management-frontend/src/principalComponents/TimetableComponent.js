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
            .catch(error => {
                console.error('Error fetching Timetable:', error);
                setTimetables([]);
                alert("NO Timetable found")
            });
    };

    const handleCreateOrUpdate = (timetable) => {
        if (timetable.timetable_id) {

            setTimetables(timetables.map(t => (t.timetable_id === timetable.timetable_id ? timetable : t)));
            console.log(timetable)
            axiosInstance.put(`/timetable/timetables/${timetable.timetable_id}`, timetable)
                .then(response => { console.log(response); alert("Updated Successfully"); })

                .catch(error => console.error('Error updating timetable:', error));
        } else {
            axiosInstance.post(`/timetable/timetables/`, timetable)
                .then(response => {
                    console.log("Inserted");
                    // setTimetables([...timetables, response.data]); // Add the newly created timetable to the list
                    alert("Created Successfully");
                    
                })
                .catch(error => console.error('Error creating timetable:', error));
        }
    };

    const handleDelete = (id) => {
        setTimetables(timetables.filter(t => t.timetable_id != id));

        axiosInstance.delete(`/timetable/timetables/${id}`)
            .then(response => { console.log("Deleted"); alert("Deleted successfuly") })
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

                {timetables.map(timetable => (
                    <li key={timetables.timetable_id} >

                        <div className="p-4 bg-white shadow rounded flex justify-between">
                            <div>

                                <table>
                                    <tr className="font-bold border-y-2 border-x-2  bg-emerald-400"><td>Day</td>
                                        <td className='border-x-2'>{timetable.class1_start_time}-{timetable.class1_end_time}</td>
                                        <td className='border-x-2'>{timetable.class2_start_time}-{timetable.class2_end_time}</td>
                                        <td className='border-x-2'>{timetable.class3_start_time}-{timetable.class3_end_time}</td>
                                        <td className='border-x-2'>{timetable.class4_start_time}-{timetable.class4_end_time}</td>
                                    </tr>

                                    <tr className='bg-stone-500'>
                                        <td className='border-x-2 border-y-2'>{timetable.day_of_week}</td>
                                        <td className='border-x-2 border-y-2'>{timetable.sub1}</td>
                                        <td className='border-x-2 border-y-2'>{timetable.sub2}</td>
                                        <td className='border-x-2 border-y-2'>{timetable.sub3}</td>
                                        <td className='border-x-2 border-y-2'>{timetable.sub4}</td>
                                    </tr>

                                    <div className="space-x-2">
                                        <button onClick={() => setSelectedTimetable(timetable)} className="bg-yellow-500 text-white py-1 px-3 rounded">Edit</button>
                                        <button onClick={() => handleDelete(timetable.timetable_id)} className="bg-red-500 text-white py-1 px-3 rounded">Delete</button>
                                    </div>
                                </table>

                            </div>
                        </div>

                    </li>
                ))}
            </ul >
            {selectedTimetable && (
                <ModalForm
                    entity={selectedTimetable}
                    onSave={handleCreateOrUpdate}
                    onClose={() => setSelectedTimetable(null)}
                    type="Timetable"
                />
            )}
        </div >
    );
};

export default TimetableComponent;
