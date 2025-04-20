import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import RepoItem from '../components/RepoItem';
import Loader from '../components/Loader';
import { useGitHub } from '../context/GitHubContext';

const Repositories = () => {
  const { username } = useParams();
  const {
    user,
    repositories,
    loading,
    error,
    searchUser,
    getUserRepos,
  } = useGitHub();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      if (!username) return;

      // Fetch user data only if not available or incorrect
      if (!user || user.login !== username) {
        const userData = await searchUser(username);
        if (!userData) {
          navigate('/');
          return;
        }
      }

      // Fetch repositories only if not already fetched or if user changed
      if (repositories.length === 0 || user?.login !== username) {
        await getUserRepos(username);
      }
    };

    fetchData();

    document.title = username
      ? `${username}'s Repositories - GitFinder`
      : 'GitFinder - GitHub User Explorer';
  }, [username, user?.login, repositories.length, searchUser, getUserRepos, navigate]);

  const filteredRepos = repositories.filter(repo =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (repo.description && repo.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  if (loading) return <Loader />;

  if (error) {
    return (
      <div className="max-w-md mx-auto text-center py-8">
        <h2 className="text-2xl font-bold text-red-500 mb-4">Error</h2>
        <p className="text-gray-700 mb-4">{error}</p>
        <button
          onClick={() => navigate('/')}
          className="btn btn-primary"
        >
          Back to Home
        </button>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="max-w-3xl mx-auto page-transition">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="mb-4 sm:mb-0">
          <button
            onClick={() => navigate(`/profile/${username}`)}
            className="inline-flex items-center text-orange-500 hover:text-orange-600 transition-colors mb-2"
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            Back to Profile
          </button>
          <h1 className="text-2xl font-bold text-gray-800">
            {user.name || username}'s Repositories
          </h1>
          <p className="text-gray-600">
            {repositories.length} {repositories.length === 1 ? 'repository' : 'repositories'} found
          </p>
        </div>

        <div>
          <input
            type="text"
            placeholder="Search repositories..."
            className="input w-full sm:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {filteredRepos.length > 0 ? (
        <div className="space-y-4">
          {filteredRepos.map((repo) => (
            <RepoItem key={repo.id} repo={repo} />
          ))}
        </div>
      ) : (
        <div className="card p-6 text-center">
          <p className="text-gray-600">
            {searchTerm
              ? 'No repositories match your search criteria'
              : 'No repositories found for this user'}
          </p>
        </div>
      )}
    </div>
  );
};

export default Repositories;
