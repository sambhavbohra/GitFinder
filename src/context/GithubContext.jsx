import React, { createContext, useContext, useState, useCallback } from 'react';

const GitHubContext = createContext();

export const useGitHub = () => {
  const context = useContext(GitHubContext);
  if (context === undefined) {
    throw new Error('useGitHub must be used within a GitHubProvider');
  }
  return context;
};

export const GitHubProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const BASE_URL = 'https://api.github.com';

  const searchUser = useCallback(async (username) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${BASE_URL}/users/${username}`);

      if (!response.ok) {
        if (response.status === 404) {
          setError('User not found');
          setUser(null);
          return null;
        }

        throw new Error(`Error: ${response.status}`);
      }

      const userData = await response.json();
      setUser(userData);
      return userData;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setUser(null);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  const getUserRepos = useCallback(async (username) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${BASE_URL}/users/${username}/repos?sort=updated&per_page=10`);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const reposData = await response.json();
      setRepositories(reposData);
      return reposData;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setRepositories([]);
      return [];
    } finally {
      setLoading(false);
    }
  }, []);

  const getUserFollowers = useCallback(async (username) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${BASE_URL}/users/${username}/followers?per_page=10`);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const followersData = await response.json();
      setFollowers(followersData);
      return followersData;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setFollowers([]);
      return [];
    } finally {
      setLoading(false);
    }
  }, []);

  const clearUser = useCallback(() => {
    setUser(null);
    setRepositories([]);
    setFollowers([]);
    setError(null);
  }, []);

  return (
    <GitHubContext.Provider
      value={{
        user,
        repositories,
        followers,
        loading,
        error,
        searchUser,
        getUserRepos,
        getUserFollowers,
        clearUser,
      }}
    >
      {children}
    </GitHubContext.Provider>
  );
};
