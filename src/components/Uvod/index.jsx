import { h } from 'preact';
import Styles from './styles.module.scss';

function Uvod() {
	return (
		<section id="uvod" class="h-[100vh] py-4 mt-[100px]">
				<div class="flex">
					<div class="flex-1">
						<div class="text-gray-500 text-sm">
							<h2 class="font-bold">Maľovať je vášeň</h2>
							<p class="my-4">
								„Tvoriť a maľovať je vášeň. Vášeň najsilnejšia a nepremožiteľná, ktorá, aj keď všetky
								túžby v tebe pohasli, nesmie pominúť. Všetkého sa môžeš zriecť, vo všetkom rezignovať,
								ale v umení nikdy.“ Slová Jana Zrzavého rezonujú aj po mnohých rokoch. Nielen v obrazoch
								českého maliara, ale aj v obrazoch, či myslení jeho duchovných nasledovníkov. Patrí k
								nim aj Martin, pre ktorého je maľovanie vášňou. Každodennou, vytrvalou, spaľujúcou. Ale
								aj intímnou spoveďou s tichým vyznaním. A keď prídu pochybnosti, nikdy nevidieť
								rezignáciu. Naopak, jeho ženské tváre odzrkadľujú galériu našich vznešených predstáv i
								najtajnejších túžob. Sú blízke i vzdialené, rozmaľované i tajuplne sa vynárajúce z
								monochrómnej hmly. Majú veľa chutí i vôní. Sú tam Madame de Pompadour aj Levočská biela
								pani.
							</p>
							<p class="my-4">
								Martin často pripomína, že je šťastný, že môže robiť to, čo ho aj baví. Ale zároveň
								zdôrazňuje, že by to nešlo bez ľudí, ktorých stretol a ktorí ho posúvali v jeho živote i
								tvorbe. Či už to bola mama Božka, vydavateľka Gabika, galeristka Carmen, básnik Kamil,
								brat Andrej - a, samozrejme, jeho tri ženy doma - Daniela, Dorotka a Barborka, ktorým
								nežné hovorí „chodiace emócie“. To sú tie dôležité súčasti, ktoré talentu dávajú zmysel
								a jeho obrazom zase schopnosť oživiť slová, ktoré povedala líška v Malom princovi:
								„Dobre vidíme iba srdcom. To hlavné je očiam neviditeľné.“
							</p>
							<p class="my-4">
								Ako je to teda s Martinom? Nie je to nič zložité. Vidí so srdcom, myslí s vášňou a žije,
								či
								stretáva sa s ľuďmi, ktorých prítomnosť mu prináša ten správny vietor do plachiet. Čo
								viac
								si možno priať? Azda už len to, aby to pokračovalo...
							</p>

							<span style="float: right">Kamarát Ľudo</span>
						</div>
					</div>
					<div class="flex-1 p-8 flex justify-center">
						<div class="container max-w-[400px] my-auto">
							<img src="./public/assets/videos/1.png" alt=""/>
							<div class="flex my-2 gap-2">
								<div class="flex-1">
									<img src="./public/assets/videos/2.png" alt=""/>
								</div>
								<div class="flex-1">
									<img src="./public/assets/videos/3.png" alt=""/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
	);
}
export default Uvod;
