import { ArrowRight, Copy} from 'lucide-react';
import { Button } from "@/components/button";
import { IconButton } from '@/components/iconButton';
import { Input } from '@/components/input';

export default function Home() {
  return (
    <main>
      <Button type='submit'>
        <p>Enviar</p>
        <ArrowRight/>
      </Button>
      <IconButton>
        <Copy/>
      </IconButton>
      <div>
        <Input type='email' placeholder='Digite seu email'/> 
      </div>
      
    </main>
  );
}
