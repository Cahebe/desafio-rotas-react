import "./styles.css";
import { useState } from "react";
import * as profileService from "../../../services/profile-service";
import { Profile } from "../../../models/profileInterface";
import ProfileFound from "./ProfileFound";
import ProfileNotFound from "./ProfileNotFound";

type FormData = {
  profileName: string;
};

export default function Search() {
  const [formData, setFormData] = useState<FormData>({ profileName: '' });
  const [profile, setProfile] = useState<Profile>();
  const [profileFound, setProfileFound] = useState<boolean | null>(null);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  }

  async function handleFormSubmit(event: React.FormEvent) {
    event.preventDefault();

    try {
      const response = await profileService.searchProfile(formData.profileName);
      setProfile(response.data);
      setProfileFound(true);
    } catch (error) {
      setProfileFound(false);
    }
  }

  return (
    <>
      <main>
        <div className="search-main-container">
          <h1>Encontre um perfil Github</h1>
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              name="profileName"
              value={formData.profileName}
              placeholder="Usuário Github"
              onChange={handleInputChange}
            />
            <button type="submit">Encontrar</button>
          </form>
        </div>
        {profileFound === true && profile && <ProfileFound profile={profile} />}
        {profileFound === false && <ProfileNotFound />}
      </main>
    </>
  );
}
