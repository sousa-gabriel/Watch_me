import { GenreResponseProps } from '../App';
import { Button } from '../components/Button';
interface SideBarProps {
  genres: GenreResponseProps[];
  ButtonPress: (id:number) => void;  
  selectedGenreId: number;
}



export function SideBar({ genres, ButtonPress, selectedGenreId }: SideBarProps) {
  return(
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => ButtonPress(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}