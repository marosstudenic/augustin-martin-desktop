import { h } from 'preact';
import Styles from './styles.module.scss';

function Novinky() {
	return (
		<section id="novinky" class="h-[100vh]">
				<div class="flex py-10 h-full">
					<div class="flex-1 px-4">
						<h3 class="text-gray-500 mb-2">Novinky</h3>
						<div class="w-[300px] relative h-[500px] group">
							<img src="./public/assets/news/kamil-peteraj-a-martin-augustin-nestandard1.jpg"
								alt="Novinky augustin martin"
								class="absolute top-0 left-0 h-full w-full object-cover" />
							<div class="hover:bg-black hover:bg-opacity-60">
								<div
									class="overlay absolute top-0 left-0 w-full h-full flex flex-col align-middle pt-16 px-4 bg-stone-900 bg-opacity-60">
									<h2 class="text-center text-white font-bold text-2xl leading-6">
										Sen menom láska
									</h2>
									<h4 class="text-center text-white text-sm">
										Kamil Peteraj, Martin Augustín
									</h4>

									<p class="text-center text-white my-3 leading-5">
										Som veľmi rád, že moje ilustrácie sprevádzajú krásne a tak pravdivé
										básne Kamila Peteraja v edícii luxusnej knižnice.
									</p>

									<p class="text-center text-white text-sm">
										Ja verím, že jeden z najkrajších citov je láska. Robí z ná bytosti
										cítiace a súcitiace. A verím, že toto spojenie prispeje k tomu aby náš
										svet bol krajší.
									</p>
									<div class="flex justify-center">
										<a href="#" class="text-white border-white border py-0.5 px-2 mt-5">Viac
										</a>
									</div>
								</div>
							</div>
						</div>

					</div>

					<div class="flex-1 h-[500px] flex flex-col">
						<div class="flex-1 flex h-[150px] gap-1">
							<div class="flex-1 h-full">
								<h3 class="text-gray-500 mb-2">Publikácie</h3>
								<img src="/assets/news/brozovanaPublikacia_obrazyTextySentencie.jpg" alt="" class="object-contain h-full"/>
							</div>
							<div class="flex-1 h-full">
								<h3 class="text-gray-500 mb-2">Textílie</h3>
								<img src="/assets/news/hodvabnaSatka.jpg" alt="" class="object-contain h-full"/>
							</div>
						</div>

						<div class="flex-1 flex h-[150px] gap-1 mt-16">
							<div class="flex-1 h-full">
								<h3 class="text-gray-500 mb-2">Grafické listy</h3>
								<img src="/assets/news/grafList_slnkoNadHlavou.jpg" alt="" class="object-contain h-full"/>
							</div>
							<div class="flex-1 h-full">
								<h3 class="text-gray-500 mb-2">Limitované edície</h3>
								<img src="/assets/news/limitovane_senMenomLaska.jpg" alt="" class="object-contain h-full"/>
							</div>
						</div>

				
					</div>


				</div>
			</section>
	);
}
export default Novinky;
