import { useRef } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { Profile } from "../../../../models/profileInterface";

interface SearchProps {
  profile: Profile | null;
}

export default function ProfileFound({profile}: SearchProps) {
  const imageRef = useRef<HTMLImageElement | null>(null);

  return (
    <section>
      <div className="profile-card-container">
        {profile && (
          <>
            <div className="img-container">
              <img src={profile.avatar_url} ref={imageRef} alt="" />
            </div>
            <div className="information-container border-edit">
              <p className="title-label">Informações</p>
              <div className="content-container">
                <div className="flex border-edit">
                  <p className="label">Perfil:</p>
                  <Link
                    to={profile.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="profile-link"
                  >
                    <p>{profile.html_url}</p>
                  </Link>
                </div>
                <div className="flex border-edit">
                  <p className="label">Seguidores:</p>
                  <p className="data">{profile.followers}</p>
                </div>
                <div className="flex border-edit">
                  <p className="label">Localidade:</p>
                  <p className="data">
                    {profile.location || "Não especificada"}
                  </p>
                </div>
                <div className="flex border-edit">
                  <p className="label">Nome:</p>
                  <p className="data">{profile.name || "Não especificado"}</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
