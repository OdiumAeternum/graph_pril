import { Button, Input, Textarea, useStatusStyles } from '@chakra-ui/react';

export default function CreateNoteForm() {
    const [note, setNote] = useState(null);

    const onSubmit = (e) => {
        e.preventDefault();
        setNote(null);
        onCreate(note);
    };

    return (
        <form className="w-full flex flex-col gap-3">
          <h3 className="font-bold text-xl">Создание заметки</h3>
          <Input 
            placeholder="Название"
            value={note?.title ?? ""}
            onChange={(e) => setNote({ ...note, title: e.target.value })}
          />
          <Textarea 
            placeholder="Описание" 
            value={note?.description ?? ""}
            onChange={(e) => setNote({ ...note, description: e.target.value })}
          />
          <Button type="submit" colorScheme="teal">
            Создать
          </Button>
        </form>
    )
}