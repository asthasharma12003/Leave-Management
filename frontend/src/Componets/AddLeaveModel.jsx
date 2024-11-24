import { useContext, useState } from "react";
import { BackendURL } from "../Constants";
import { toast } from "react-toastify";
import { AuthContext } from "../Context/AuthContext";

const AddLeaveModel = () => {
  const { token } = useContext(AuthContext);
  const [eventName, setEventName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [file, setFile] = useState(null); // Use null as default for file

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("eventName", eventName);
    formData.append("startDate", new Date(startDate).toISOString()); // Ensure proper Date format
    formData.append("endDate", new Date(endDate).toISOString());
    formData.append("file", file);

    try {
      const response = await fetch(`${BackendURL}/request-leave`, {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const jsonRes = await response.json();

      if (!jsonRes.success) {
        toast.error(jsonRes.message);
      } else {
        toast.success("Leave Requested Successfully");
        document.getElementById("closeBTN").click();
      }
    } catch (error) {
      toast.error("Failed to submit request");
      console.error("Error during leave request:", error);
    }
  };

  return (
    <>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        Request Leave
      </button>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="flex flex-col gap-4">
            <label className="input input-bordered flex items-center gap-2">
              Event Name
              <input
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                type="text"
                className="grow"
                placeholder=""
                required
              />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              Start Date
              <input
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                type="date"
                className="grow"
                placeholder="DD/MM/YYYY"
                required
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              End Date
              <input
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                type="date"
                className="grow"
                placeholder="DD/MM/YYYY"
                required
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Certificate or Document Proof
              <input
                onChange={(e) => setFile(e.target.files[0])}
                type="file"
                className="file-input w-full max-w-xs"
                required
              />
            </label>
          </div>

          <div className="modal-action">
            <button onClick={handleSubmit} className="btn btn-error">
              Submit
            </button>
            <form method="dialog">
              <button id="closeBTN" className="btn">
                Cancel
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default AddLeaveModel;
