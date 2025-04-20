import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import FollowerItem from '../components/FollowerItem';
import Loader from '../components/Loader';
import { useGitHub } from '../context/GitHubContext';

const Followers = () => {
  const { username } = useParams();
  const {
    user,
    followers,
    loading,
    error,
    searchUser,
    getUserFollowers,
  } = useGitHub();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (!username) return;

      // Fetch user data if not already loaded or if different user
      if (!user || user.login !== username) {
        const userData = await searchUser(username);
        if (!userData) {
          navigate('/');
          return;
        }
      }

      // Fetch followers only if not already loaded or user changed
      if (followers.length === 0 || user?.login !== username) {
        await getUserFollowers(username);
      }
    };

    fetchData();

    document.title = username
      ? `${username}'s Followers - GitFinder`
      : 'GitFinder - GitHub User Explorer';
  }, [username, user?.login, followers.length, searchUser, getUserFollowers, navigate]);

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
      <div className="mb-6">
        <button
          onClick={() => navigate(`/profile/${username}`)}
          className="inline-flex items-center text-orange-500 hover:text-orange-600 transition-colors mb-2"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          Back to Profile
        </button>
        <h1 className="text-2xl font-bold text-gray-800">
          {user.name || username}'s Followers
        </h1>
        <p className="text-gray-600">
          {followers.length} {followers.length === 1 ? 'follower' : 'followers'} found
        </p>
      </div>

      {followers.length > 0 ? (
        <div className="space-y-4">
          {followers.map((follower) => (
            <FollowerItem key={follower.id} follower={follower} />
          ))}
        </div>
      ) : (
        <div className="card p-6 text-center">
          <p className="text-gray-600">This user doesn't have any followers yet</p>
        </div>
      )}
    </div>
  );
};

export default Followers;
