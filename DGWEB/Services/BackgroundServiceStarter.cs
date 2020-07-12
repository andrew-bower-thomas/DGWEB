﻿using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace DGWEB.Services
{
	//https://stackoverflow.com/questions/51254053/how-to-inject-a-reference-to-a-specific-ihostedservice-implementation
	public class BackgroundServiceStarter<T> : IHostedService
		where T : IHostedService
	{
		private readonly T backgroundService;

		public BackgroundServiceStarter(T backgroundService)
		{
			this.backgroundService = backgroundService;
		}

		public Task StartAsync(CancellationToken cancellationToken)
		{
			return backgroundService.StartAsync(cancellationToken);
		}

		public Task StopAsync(CancellationToken cancellationToken)
		{
			return backgroundService.StopAsync(cancellationToken);
		}
	}
}
