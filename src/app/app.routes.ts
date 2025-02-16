import { Routes } from '@angular/router';
import { RandomQuotesComponent } from './pages/random-quotes/random-quotes.component'; // Ensure this path is correct
import { AllQuotesComponent } from './pages/all-quotes/all-quotes.component';

export const routes: Routes = [
  { path: '', redirectTo: 'random-quote', pathMatch: 'full' },
  { path: 'random-quote', component: RandomQuotesComponent },
  { path: 'all-quotes', component: AllQuotesComponent }
];