import React, { useState, useRef, useEffect } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
}

const allUsers: User[] = [
  {
    id: 1,
    name: "Peter Parker",
    email: "peter@sifax.com",
    avatar: "https://i.pravatar.cc/40?img=1",
  },
  {
    id: 2,
    name: "Pepper Potts",
    email: "pepper@sifax.com",
    avatar: "https://i.pravatar.cc/40?img=2",
  },
  {
    id: 3,
    name: "Bruce Wayne",
    email: "bruce@sifax.com",
    avatar: "https://i.pravatar.cc/40?img=3",
  },
  {
    id: 4,
    name: "Clark Kent",
    email: "clark@sifax.com",
    avatar: "https://i.pravatar.cc/40?img=4",
  },
];

const UserTagInput: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inputValue.trim() === "") {
      setFilteredUsers(allUsers);
      setShowDropdown(true);
      return;
    }

    const lower = inputValue.toLowerCase();
    const results = allUsers.filter(
      (user) =>
        (user.name.toLowerCase().includes(lower) ||
          user.email.toLowerCase().includes(lower)) &&
        !selectedUsers.some((s) => s.id === user.id)
    );

    setFilteredUsers(results);
    setShowDropdown(results.length > 0);
  }, [inputValue, selectedUsers]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelectUser = (user: User) => {
    setSelectedUsers((prev) => [...prev, user]);
    setInputValue("");
    setShowDropdown(false);
  };

  const handleRemoveUser = (id: number) => {
    setSelectedUsers((prev) => prev.filter((u) => u.id !== id));
  };

  // Adds all users that are not already selected
  const handleAddAll = () => {
    setSelectedUsers((prev) => {
      const alreadySelectedIds = new Set(prev.map((u) => u.id));
      const newUsers = allUsers.filter((u) => !alreadySelectedIds.has(u.id));
      return [...prev, ...newUsers];
    });

    // Reset dropdown and input
    setInputValue("");
    setShowDropdown(false);
  };

  return (
    <div className="user-tag-input" ref={containerRef}>
      <div className="form-floating form-floating-outline">
        {selectedUsers.map((user) => (
          <div key={user.id} className="user-pill">
            <img src={user.avatar} alt={user.name} />
            <span>{user.name}</span>
            <button onClick={() => handleRemoveUser(user.id)}>×</button>
          </div>
        ))}
        <input
          type="text"
          id="TagifyUserList"
          name="TagifyUserList"
          className="form-control h-auto"
          value={inputValue}
          placeholder={
            selectedUsers.length === 0 ? "Type to search users..." : ""
          }
          onChange={(e) => setInputValue(e.target.value)}
          onClick={() => {
            showDropdown ? setShowDropdown(false) : setShowDropdown(true);
          }}
          onFocus={() => {
            //  showDropdown ? setShowDropdown(false) : setShowDropdown(true)
          }}
        />
        <label htmlFor="TagifyUserList">Users List</label>
      </div>

      {showDropdown && (
        <div>
          <ul className="user-dropdown">
            <div
              className="all-btn"
              onClick={() => {
                handleAddAll();
              }}>
              <strong>Add All</strong>
              <small>{filteredUsers.length} numbers</small>
            </div>
            {filteredUsers.map((user) => (
              <div key={user.id}>
                <li onClick={() => handleSelectUser(user)}>
                  <img src={user.avatar} alt={user.name} />
                  <div>
                    <strong>{user.name}</strong>
                    <small>{user.email}</small>
                  </div>
                </li>
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserTagInput;
