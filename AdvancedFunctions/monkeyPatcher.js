function patch(input) {
    switch (input) {
        case 'upvote':
            this.upvotes++;
            break;
        case 'downvote':
            this.downvotes++;
            break;
        case 'score':
            let currentUpvotes = this.upvotes;
            let currentDownVotes = this.downvotes;
            let rating = 'new';
            if(currentDownVotes + currentUpvotes >= 10){
                if(currentUpvotes > (0.66 * (currentUpvotes + currentDownVotes))){
                    rating = 'hot';
                } else if(currentDownVotes > currentUpvotes){
                    rating = 'unpopular';
                } else if(currentUpvotes > 100 || currentDownVotes > 100){
                    rating = 'controversial';
                }
            }
            if(currentDownVotes + currentUpvotes > 50){
                let modifier = Math.ceil(0.25 * Math.max(currentUpvotes, currentDownVotes));
                currentDownVotes += modifier;
                currentUpvotes += modifier;
            }
            let score = currentUpvotes - currentDownVotes;
            return [currentUpvotes, currentDownVotes, score, rating];
    }
}