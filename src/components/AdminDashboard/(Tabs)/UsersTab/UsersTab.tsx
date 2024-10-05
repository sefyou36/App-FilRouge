/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";
import "./UsersTab.scss";

interface User {
  id_utilisateur: number;
  nom: string;
  email: string;
  adresse: string;
  role: string;
}

function UsersTab() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/users');
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des utilisateurs');
      }
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    } catch (error) {
      setError("Impossible de charger les utilisateurs");
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cet utilisateur ?")) {
      try {
        const response = await fetch(`/api/users?id=${id}`, { method: 'DELETE' });
        if (response.ok) {
          setUsers(users.filter(user => user.id_utilisateur !== id));
        } else {
          throw new Error("Erreur lors de la suppression");
        }
      } catch (error) {
        setError("Erreur lors de la suppression de l'utilisateur");
      }
    }
  };

  const handleEdit = (user: User) => {
    setEditingUser(user);
  };

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!editingUser) return;

    try {
      const response = await fetch(`/api/users?id=${editingUser.id_utilisateur}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingUser),
      });

      if (response.ok) {
        const updatedUser = await response.json();
        setUsers(users.map(user => user.id_utilisateur === updatedUser.id_utilisateur ? updatedUser : user));
        setEditingUser(null);
      } else {
        throw new Error("Erreur lors de la mise à jour");
      }
    } catch (error) {
      setError("Erreur lors de la mise à jour de l'utilisateur");
    }
  };

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur : {error}</div>;

  return (
    <section className="users-tab">
      <div className="users-tab__container">
        <div className="users-tab__container__header">
          <h2>Utilisateurs</h2>
          {/* ... (le reste du code pour la recherche et le filtrage) ... */}
        </div>

        <div className="users-tab__content__body">
          <table className="users-tab__content__body__table">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Email</th>
                <th>Adresse</th>
                <th>Rôle</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id_utilisateur}>
                  <td>{user.nom}</td>
                  <td>{user.email}</td>
                  <td>{user.adresse}</td>
                  <td>{user.role}</td>
                  <td>
                    <button onClick={() => handleEdit(user)}>Modifier</button>
                    <button onClick={() => handleDelete(user.id_utilisateur)}>Supprimer</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {editingUser && (
          <form onSubmit={handleUpdate}>
            <input
              value={editingUser.nom}
              onChange={e => setEditingUser({...editingUser, nom: e.target.value})}
              placeholder="Nom"
            />
            <input
              value={editingUser.email}
              onChange={e => setEditingUser({...editingUser, email: e.target.value})}
              placeholder="Email"
            />
            <input
              value={editingUser.adresse}
              onChange={e => setEditingUser({...editingUser, adresse: e.target.value})}
              placeholder="Adresse"
            />
            <select
              value={editingUser.role}
              onChange={e => setEditingUser({...editingUser, role: e.target.value})}
            >
              <option value="client">Client</option>
              <option value="livreur">Livreur</option>
              <option value="admin">Admin</option>
              <option value="restaurant">Restaurant</option>
            </select>
            <button type="submit">Mettre à jour</button>
            <button type="button" onClick={() => setEditingUser(null)}>Annuler</button>
          </form>
        )}
      </div>
    </section>
  );
}

export default UsersTab;