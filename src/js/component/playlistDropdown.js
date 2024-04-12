import React, { useState } from "react";



const PlaylistDropdown = () => {
    const [playlists, setPlaylists] = useState([
        { uid: 1, title: "Fun playlist" },
        { uid: 2, title: "Sad playlist" },
        { uid: 3, title: "Cool playlist" }
    ])
    const [searchTitle, setSearchTitle] = useState("");

    return (
        <div className="text-center playlist-dropdown">
            <div className="dropdown">
                <button type="button" className="btn btn-outline-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                    Dropdown form
                </button>

                <form className="dropdown-menu p-4">
                    <div className="mb-3">
                        <input type="text" onChange={(e) => setSearchTitle(e.target.value)} className="form-control" id="exampleDropdownFormEmail2" placeholder="" />
                    </div>
                    <ul className="list-unstyled">
                        {
                            playlists.filter(plst => {
                                if (searchTitle) return plst.title == searchTitle;
                                else return true;
                            })
                                .map(res => <li><a class="dropdown-item" href="#">{res.title}</a></li>)
                        }
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#">Create playlist <strong>{searchTitle}</strong></a></li>
                    </ul>
                </form>
            </div>
        </div>
    );
};

export default PlaylistDropdown;
