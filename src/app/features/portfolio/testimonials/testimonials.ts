import { Component } from '@angular/core';

interface Testimonial {
  quote: string;
  quoteEn: string;
  author: string;
  role: string;
  project: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: false,
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials {
  activeIndex = 0;

  testimonials: Testimonial[] = [
    {
      quote: 'Die Zusammenarbeit mit Virxhin war sehr produktiv. Er hat immer klare Ideen eingebracht und das Team motiviert. Sein technisches Verständnis und seine Zuverlässigkeit haben das Kochwelt-Projekt entscheidend vorangebracht.',
      quoteEn: 'Working with Virxhin was very productive. He always brought clear ideas and motivated the team. His technical understanding and reliability were key to the success of the Kochwelt project.',
      author: 'Daniel Sack',
      role: 'Frontend Developer',
      project: 'Kochwelt',
    },
    {
      quote: 'Virxhin ist ein engagierter und kreativer Teampartner. Beim Kochwelt-Projekt hat er stets lösungsorientiert gearbeitet und mit seiner positiven Art die Zusammenarbeit sehr angenehm gestaltet.',
      quoteEn: 'Virxhin is a committed and creative team partner. In the Kochwelt project, he always worked in a solution-oriented manner and made the collaboration very pleasant with his positive attitude.',
      author: 'Daniel Stürmer',
      role: 'Frontend Developer',
      project: 'Kochwelt',
    },
    {
      quote: 'Mit Virxhin zu arbeiten war eine echte Bereicherung. Er hat beim Join-Projekt eigenverantwortlich Features umgesetzt und war immer hilfsbereit. Ein verlässlicher Teamplayer, mit dem man gerne zusammenarbeitet.',
      quoteEn: 'Working with Virxhin was a real enrichment. He independently implemented features in the Join project and was always helpful. A reliable team player who is a pleasure to work with.',
      author: 'Maximilian Bese',
      role: 'Frontend Developer',
      project: 'Join',
    },
    {
      quote: 'Virxhin hat beim Join-Projekt gezeigt, dass er sowohl technisch als auch menschlich ein starker Teampartner ist. Seine strukturierte Arbeitsweise und sein Engagement haben das Projekt maßgeblich zum Erfolg geführt.',
      quoteEn: 'Virxhin showed in the Join project that he is a strong team partner both technically and personally. His structured approach and dedication were instrumental in the project\'s success.',
      author: 'Jan-Oliver Kämmerer',
      role: 'Frontend Developer',
      project: 'Join',
    },
  ];

  get prevIndex(): number {
    return (this.activeIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  get nextIndex(): number {
    return (this.activeIndex + 1) % this.testimonials.length;
  }

  get prevCard(): Testimonial {
    return this.testimonials[this.prevIndex];
  }

  get activeCard(): Testimonial {
    return this.testimonials[this.activeIndex];
  }

  get nextCard(): Testimonial {
    return this.testimonials[this.nextIndex];
  }

  getQuote(t: Testimonial): string {
    const lang = localStorage.getItem('lang') || 'de';
    return lang === 'en' ? t.quoteEn : t.quote;
  }

  prev(): void {
    this.activeIndex = this.prevIndex;
  }

  next(): void {
    this.activeIndex = this.nextIndex;
  }

  goTo(i: number): void {
    this.activeIndex = i;
  }
}
