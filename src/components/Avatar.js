import { faFloppyDisk, faRotateLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Avatar({UpdateAvatar}) {
   
    return (
        <div className="body">
            <div className="container-edit">
                <div className="h1-wrapper">
                    <h1>Change Avatar</h1>
                </div>
                <form onSubmit={() => UpdateAvatar()} className="form-edit" enctype="multipart/form-data">
                    <div className="img-avatar">
                        <label for="avatar" className="avatar-label">Avatar</label>
                        <input type="file" name="avatar" className="form-control" id="avatar" placeholder="Choose File" />
                    </div>
                    <div className="container-preview">
                        <label for="preview" className="preview">Preview</label>
                        <div className="input-avatar">
                            <img src="./foto-profil-merokok.webp" alt="avatar" className="img-thumbnail" />
                        </div>
                    </div>

                    <div className="save-cancel-edit">
                        <div className="button-save">
                            <button type="submit" className="btn button-submit"> <FontAwesomeIcon icon={faFloppyDisk} /></button>
                        </div>
                        <div>
                            <a href="/" className="btn button-cancel"> <FontAwesomeIcon icon={faRotateLeft} /></a>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}