import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import FollowerItem from '../components/FollowerItem';
import Loader from '../components/Loader';
import { useGitHub } from '../GithubContext';

const Followers = () => {
  const { username } = useParams();
  const { user, followers, loading, error, searchUser, getUserFollowers } = useGitHub();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (!username) return;
      if (!user || user.login !== username) {
        const userData = await searchUser(username);
        if (!userData) {
          navigate('/');
          return;
        }
      }
      if (followers.length === 0 || user?.login !== username) {
        await getUserFollowers(username);
      }
    };

    fetchData();
    document.title = username ? `${username}'s Followers - GitFinder` : 'GitFinder';
  }, [username, user?.login, followers.length, searchUser, getUserFollowers, navigate]);

  if (loading) return <Loader />;

  if (error) {
    return (
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-8 mt-8 animate-fade-in">
        <h2 className="text-2xl font-bold text-red-500 mb-4 text-center">Error</h2>
        <p className="text-gray-700 mb-6 text-center">{error}</p>
        <button
          onClick={() => navigate('/')}
          className="w-full py-3 px-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-medium shadow-md hover:from-orange-600 hover:to-orange-700 transition-all duration-200 transform hover:-translate-y-0.5"
        >
          Back to Home
        </button>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="max-w-3xl mx-auto animate-fade-in">
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <button
          onClick={() => navigate(`/profile/${username}`)}
          className="group inline-flex items-center text-orange-500 hover:text-orange-600 transition-colors duration-200 mb-4"
        >
          <ChevronLeft className="h-5 w-5 mr-1 group-hover:-translate-x-1 transition-transform duration-200" />
          Back to Profile
        </button>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          {user.name || username}'s Followers
        </h1>
        <p className="text-gray-600">
          {followers.length} {followers.length === 1 ? 'follower' : 'followers'} found
        </p>
      </div>

      <div className="space-y-4">
        {followers.length > 0 ? (
          followers.map((follower) => (
            <FollowerItem key={follower.id} follower={follower} />
          ))
        ) : (
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <p className="text-gray-600">This user doesn't have any followers yet</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Followers;
