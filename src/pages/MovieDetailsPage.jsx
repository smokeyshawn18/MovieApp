import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner.jsx";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `${API_BASE_URL}/movie/${movieId}?language=en-US`,
          API_OPTIONS,
        );

        if (!response.ok) {
          throw new Error("Failed to fetch movie details");
        }

        const data = await response.json();
        setMovie(data);
      } catch (err) {
        console.error("Error fetching movie details:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner />
      </div>
    );

  if (error)
    return (
      <div className="wrapper min-h-screen flex items-center justify-center">
        <div className="bg-red-900/20 border border-red-500 rounded-lg p-6">
          <p className="text-red-400 text-lg">❌ Error: {error}</p>
          <button
            onClick={() => navigate("/")}
            className="mt-4 px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );

  if (!movie)
    return (
      <div className="wrapper min-h-screen flex items-center justify-center">
        <p className="text-gray-400 text-lg">Movie not found</p>
      </div>
    );

  const backdropUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      {/* Backdrop Image */}
      {backdropUrl && (
        <div className="relative h-96 overflow-hidden">
          <img
            src={backdropUrl}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>
      )}

      <div className="wrapper relative z-10 -mt-32">
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="mb-8 inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full transition-all duration-300 border border-white/20 hover:border-white/40"
        >
          <span className="text-xl">←</span> Back to Movies
        </button>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Poster */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : "/no-movie.png"
                  }
                  alt={movie.title}
                  className="w-full h-auto"
                />
              </div>

              {/* Rating Circle */}
              <div className="mt-6 flex items-center justify-center">
                <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 p-1 flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-slate-900 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold text-yellow-400">
                      {movie.vote_average
                        ? movie.vote_average.toFixed(1)
                        : "N/A"}
                    </span>
                    <span className="text-xs text-gray-400">/10</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-2">
            {/* Title and Tagline */}
            <div className="mb-8">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-3">
                {movie.title}
              </h1>
              {movie.tagline && (
                <p className="text-xl text-gray-300 italic">
                  "{movie.tagline}"
                </p>
              )}
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 mb-8">
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 hover:border-white/20 transition">
                <p className="text-gray-400 text-sm uppercase tracking-wider">
                  Release Date
                </p>
                <p className="text-white text-lg font-semibold mt-1">
                  {movie.release_date
                    ? new Date(movie.release_date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : "N/A"}
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 hover:border-white/20 transition">
                <p className="text-gray-400 text-sm uppercase tracking-wider">
                  Runtime
                </p>
                <p className="text-white text-lg font-semibold mt-1">
                  {movie.runtime ? `${movie.runtime} mins` : "N/A"}
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 hover:border-white/20 transition">
                <p className="text-gray-400 text-sm uppercase tracking-wider">
                  Status
                </p>
                <p className="text-white text-lg font-semibold mt-1">
                  {movie.status || "N/A"}
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 hover:border-white/20 transition">
                <p className="text-gray-400 text-sm uppercase tracking-wider">
                  Language
                </p>
                <p className="text-white text-lg font-semibold mt-1">
                  {movie.original_language?.toUpperCase() || "N/A"}
                </p>
              </div>
            </div>

            {/* Genres */}
            {movie.genres && movie.genres.length > 0 && (
              <div className="mb-8">
                <h3 className="text-gray-300 text-sm uppercase tracking-wider mb-3">
                  Genres
                </h3>
                <div className="flex flex-wrap gap-2">
                  {movie.genres.map((genre) => (
                    <span
                      key={genre.id}
                      className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Overview */}
            {movie.overview && (
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Overview</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {movie.overview}
                </p>
              </div>
            )}

            {/* Budget and Revenue */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {movie.budget > 0 && (
                <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-xl p-4 border border-blue-500/30">
                  <p className="text-gray-400 text-sm uppercase tracking-wider">
                    Budget
                  </p>
                  <p className="text-white text-2xl font-bold mt-2">
                    ${movie.budget.toLocaleString()}
                  </p>
                </div>
              )}
              {movie.revenue > 0 && (
                <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-xl p-4 border border-green-500/30">
                  <p className="text-gray-400 text-sm uppercase tracking-wider">
                    Revenue
                  </p>
                  <p className="text-white text-2xl font-bold mt-2">
                    ${movie.revenue.toLocaleString()}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Production Details
        {(movie.production_companies?.length > 0 ||
          movie.production_countries?.length > 0) && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-12">
            {movie.production_companies?.length > 0 && (
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">
                  Production Companies
                </h3>
                <div className="space-y-2">
                  {movie.production_companies.map((company, idx) => (
                    <p key={idx} className="text-gray-300">
                      {company.name}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {movie.production_countries?.length > 0 && (
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">
                  Production Countries
                </h3>
                <div className="space-y-2">
                  {movie.production_countries.map((country, idx) => (
                    <p key={idx} className="text-gray-300">
                      {country.name}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        )} */}
      </div>
    </div>
  );
};

export default MovieDetailsPage;
