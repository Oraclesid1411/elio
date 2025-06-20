import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import CategorySection from '@/components/category-section';

const HeroBanner = () => {

	const [count, setCount] = useState(0);

	useEffect(() => {
		// La valeur cible du compteur
		const targetCount = 5712;
		const duration = 800; // Durée de l'animation en millisecondes
		const incrementTime = 20; // Le délai entre chaque incrément

		let currentCount = 0;
		const increment = targetCount / (duration / incrementTime);

		const counterInterval = setInterval(() => {
			if (currentCount < targetCount) {
				currentCount += increment;
				setCount(Math.ceil(currentCount)); // Mise à jour de l'état du compteur
			} else {
				clearInterval(counterInterval); // Arrêter l'intervalle une fois le compteur atteint
			}
		}, incrementTime);

		// Nettoyage de l'intervalle lors du démontage du composant
		return () => clearInterval(counterInterval);
	}, []);

	const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/PagePrestataires?query=${encodeURIComponent(query)}`);
    }
  };
	return (
		<div className="hero-banner full bg-white center" 
		// style={{ background: "#df3411 url(/assets/img/banner0.jpeg) no-repeat;" }} 
		>
			<div className="container  bg-white">
			<section className="text-center py-16  bg-white md:py-24">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Trouvez le service
          <br />
          qu'il vous faut
        </h1>
        
        <div className="flex flex-col sm:flex-row max-w-3xl mx-auto mt-8 shadow-md rounded-lg overflow-hidden">
          <div className="flex-1 border-r border-gray-200">
            <Select>
              <SelectTrigger className="border-0 h-14 rounded-none focus:ring-0">
                <SelectValue placeholder="Catégorie" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="business">Entreprise</SelectItem>
                <SelectItem value="repair">Réparation</SelectItem>
                <SelectItem value="sales">Vente</SelectItem>
                <SelectItem value="realestate">Immobilier</SelectItem>
                <SelectItem value="software">Logiciel</SelectItem>
                <SelectItem value="engineering">Ingénierie</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Input 
            className="flex-[2] border-0 h-14 rounded-none focus:ring-0" 
            placeholder="Rechercher" 
          />
          <Button className="w-full sm:w-auto px-8 rounded-none bg-primary h-14 hover:bg-primary/90">
            Rechercher
          </Button>
        </div>
      </section>
				{/* <h1>
					Simplifiez-vous la vie avec nos experts locaux
				</h1>
				<p className="lead">Nous vous offrons des services express pour une vie sans stress !</p>
				<form className="mt-4">
					<div className="row justify-content-center">
						<div className="col-lg-8 col-md-10 col-sm-12">
							<div className="banner-search style-1">
								<div className="input-group">
									<input type="text" className="form-control lio-rad" 
										placeholder="Quel service recherchez vous ?" 
										value={query}
        								onChange={(e) => setQuery(e.target.value)}/>
									<div className="input-group-append">
										<button onClick={handleSearch} className="btn bt-round btn--2">
											<i className="ti-search"></i>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</form> */}
			</div>
		</div>
	)
}

export default HeroBanner